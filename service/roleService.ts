import axios from "axios";
import { Role } from "../model/role";
const roleValidator = require("../validator/roleValidator");

module.exports.getAllRoles = async function() {
    try{
        const response = await axios.get("http://localhost:8080/api/job-roles");

        return response.data;
        return response.data;
    } catch(e) {
        console.error("get request failed for api/job-roles");
        return new Error("Could not get roles");
        return new Error("Could not get roles");
    }
};

module.exports.getRoleByID = async function (roleName: string): Promise<Role> {
    try {
        const response = await axios.get("http://localhost:8080/api/job-roles/" + roleName);

        return response.data;
    } catch (e) {
        throw new Error("Could not get roles");
    }
};

module.exports.createRole = async function(role: Role): Promise<number> {
    const error: string = roleValidator.validateRole(role);
        if (error){
            throw new Error(error);
        }
        
        try{
            const response = await axios.post("http://localhost:8080/api/job-roles/", role);
            return response.data;

        } catch (e) {
            throw new Error("Could not create orders");
        }
    };

    module.exports.updateRoles = async function (roleName: string, updatedRole:Role): Promise<Role> {

        const error: string = roleValidator.validateRole(updatedRole);
    
        if (error) {
            throw new Error(error);
        }
    
        try {
            const response = await axios.put("http://localhost:8080/api/update-roles/" + roleName, updatedRole);
            
            return response.data;
        } catch (e) {
            throw new Error("Could not update role");
        }
    };