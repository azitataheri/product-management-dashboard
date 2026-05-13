import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000/',
    headers: {
        'Content-Type': 'application/json'
    }
})


// interceptors
api.interceptors.response.use(
    (reponse) => reponse,
    (error) => Promise.reject(error))

export {
    api
}