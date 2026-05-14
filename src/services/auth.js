import {
    api
} from "./config";


const registerUser = (data) => {
    console.log('sending request');

    return api.post('/auth/register', data)
}
const loginUser = (data) => {
    return api.post('/auth/login', data)
}


export {
    registerUser,
    loginUser
}