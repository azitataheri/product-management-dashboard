import { api } from "./config";

const updateProduct = (id, data) => {
    return api.put(`/products/${id}`, data)
}

export{updateProduct}