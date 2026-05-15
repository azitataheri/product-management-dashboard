const BASE_URL = "http://localhost:3000"
const getProductsList =  (page) => `${BASE_URL}/products?page=${page}&limit=10`

export{getProductsList}