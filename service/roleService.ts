import axios from "axios";
import { Role } from "../model/role";
const roleValidator = require("../validator/roleValidator")

module.exports.getAllRoles = async function() {
    try{
        const response = await axios.get('http://localhost:8080/api/job-roles')

        return response.data
    } catch(e) {
        console.error("get request failed for api/job-roles");
        return new Error('Could not get roles')
    }
}

module.exports.updateRole = async function (role:Role): Promise<Role> {

    const error: string = roleValidator.validateRole(role)

    if (error) {
        throw new Error(error)
    }

    try {
        const response = await axios.put('http://localhost:8080/api/update-roles/${role.roleName}', role)
        
        return response.data
    } catch (e) {
        throw new Error('Could not create order')
    }
}