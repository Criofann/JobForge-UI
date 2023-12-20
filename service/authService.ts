import { Login } from "../model/Login";

const axios = require('axios');
axios.defaults.baseURL = "http://localhost:8080";
module.exports.URL = "/api/login";

export async function login(login: Login): Promise<void>{
    try{
        const response = await axios.post('http://localhost:8080/api/login', login)
    
        return response.data
    } catch(e) {
        throw new Error('Could not login')
    }
}