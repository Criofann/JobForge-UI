import axios from "axios";
import { Role } from "../model/Role";
const roleValidator = require("../validator/roleValidator")
axios.defaults.baseURL = "http://localhost:8080"

module.exports.URL = '/api/job-roles'

module.exports.getAllRoles = async function() {
    try{
        const response = await axios.get(this.URL);
        return response.data;
    } catch(e) {
        throw new Error("Could not get roles");
    }
}

module.exports.getRoleByID = async function (roleName: String): Promise<Role> {
    try {
        const response = await axios.get('http://localhost:8080/api/job-roles/' + roleName)

        return response.data
    } catch (e) {
        throw new Error('Could not get roles')
    }
}

module.exports.createRole = async function(role: Role): Promise<number> {
    const error: string = roleValidator.validateRole(role)
    if (error){
        throw new Error(error)
    }
        
    try{
        const response = await axios.post('http://localhost:8080/api/job-roles/', role)
        return response.data
    } catch (e) {
        throw new Error('Could not create orders')
    }
}
    
