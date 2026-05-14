import {
    api
} from "./config";

const updateProduct = (id, data) => {
    const token = localStorage.getItem('token');
    return api.put(`/products/${id}`, data, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}


const addProduct = ( data) => {
    const token = localStorage.getItem('token');
    
    return api.post(`/products`, data, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}

export {
    updateProduct,
    addProduct
}