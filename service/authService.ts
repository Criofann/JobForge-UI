import axios from "axios";
import { Login } from "../model/Login";

axios.defaults.baseURL = "http://localhost:8080";
module.exports.URL = "/api/login/";

export async function login(login: Login): Promise<void>{
    try{
        const response = await axios.post(this.URL, login);
    
        return response.data;
    } catch(e) {
        throw new Error("Could not login");
    }
}