const {URL_API_MELI, author} = require('../utils/constants');


const getProductById = async (req, res) => {
    const { id } = req.params;
    const urlProduct = `${URL_API_MELI}/items/${id}`;
    const urlProductDescription = `${urlProduct}/description`
    const urls = [urlProduct, urlProductDescription];

    try {
        const responses = await Promise.all(urls.map(url => fetch(url)));
        const jsonData = await Promise.all(responses.map(response => response.json()));

        const [
            {
                id,
                title,
                price,
                currency_id,
                pictures: [{ secure_url }],
                condition,
                shipping: { free_shipping },
                sold_quantity,
                category_id
            },
            { plain_text },
        ] = jsonData;

        const urlProductCategorie = `${URL_API_MELI}/categories/${category_id}`
        const responseProductCategorie = await fetch(urlProductCategorie);
        
        let categoriesByProduct = await responseProductCategorie.json();
        categoriesByProduct = categoriesByProduct.path_from_root.map(category => category.name).join(" > ");

        const product = {
            author,
            item: {
                id,
                title,
                price: {
                    currency: currency_id,
                    amount: price,
                },
            },
            picture: secure_url,
            condition,
            free_shipping,
            sold_quantity,
            description: plain_text,
            categoriesByProduct
        };

        res.json(product);
    } catch (error) {
        res.status(500).send("Ocurrió un error al consultar la API");
    }
};

module.exports = getProductById;
