import {
    api
} from "./config";
const loginUser = (data) => {
    return api.post('/login', data)
}

export {
    loginUser
}