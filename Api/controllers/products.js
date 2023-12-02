const {URL_API_MELI, author} = require('../utils/constants');

const getCategories = (filters) => {
    const categoryFilter = filters.find(filter => filter.id === "category");

    if (categoryFilter) {
        const categories = categoryFilter.values[0]?.path_from_root?.map(category => category.name);
        if (categories && categories.length > 0) {
            return categories.join("  >  ");
        }
    }
    return null;
}


const getProducts = async (req, res) => {
    const { q, limit = 4 } = req.query;
    const url = `${URL_API_MELI}/sites/MLA/search?q=${q}&limit=${limit}`;
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error('Error al obtener los datos');
        }

        const data = await response.json();

        const categories = getCategories(data.filters)

        const items = data.results.map(
            ({
                id,
                title,
                price,
                currency_id,
                thumbnail,
                condition,
                shipping: { free_shipping },
                seller_address: {
                    city: { name },
                },
            }) => ({
                id,
                title,
                price: {
                    currency: currency_id,
                    amount: price,
                },
                picture: thumbnail,
                condition,
                free_shipping,
                city: name,
            })
        );

        res.json({ author, items, categories }); 
    } catch (error) {
        res.status(500).send(error.message); 
    }
};

module.exports = getProducts;
