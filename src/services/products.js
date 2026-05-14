import {
    api
} from "./config";

const updateProduct = (id, data) => {
    const token = localStorage.getItem('token');
    return api.put(`/products/${id}`, data, {
        headers: {
            Authorization: token
        }
    })
}

export {
    updateProduct
}