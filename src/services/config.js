import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000/',
    headers: {
        'Content-Type': 'application/json'
    }
})


// Interceptors
api.interceptors.response.use(
    (reponse) => reponse,
    (error) => Promise.reject(error))


api.interceptors.request.use((config) => {
    console.log('interceptor run');

    const token = localStorage.getItem('token')
    if (token) {
        config.headers = {
            ...config.headers,
            Authorization: `Bearer ${token}`
        }

    }

    return config
})
export {
    api
}