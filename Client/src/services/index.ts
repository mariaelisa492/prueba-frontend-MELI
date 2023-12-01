const basicPath = 'http://localhost:5000/items'

export const getAllItems = async (name:string) => {
    try {
        const url = `${basicPath}?q=${name}`;
        const response = await fetch(url); 
        if (!response.ok) {
            throw new Error('Error al obtener los datos');
        }
        const items = await response.json();
        return items
    } catch (error) {
        console.error('Error');
    }
}

export const getItemByIdProduct = async (id:string) => {
    try {
        const url = `${basicPath}/${id}`;
        const response = await fetch(url); 
        if (!response.ok) {
            throw new Error('Error al obtener los datos');
        }
        const itemById = await response.json();
        console.log(itemById);
    } catch (error) {
        console.error('Error');
    }
}