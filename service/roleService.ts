import axios from "axios";
import { Role } from "../model/Role";

const roleValidator = require("../validator/roleValidator");
axios.defaults.baseURL = "http://localhost:8080";
module.exports.URL = "/api/job-roles/";

module.exports.getAllRoles = async function() {
    try{
        const response = await axios.get(this.URL);

        return response.data;
    } catch(e) {
        throw new Error("Could not get roles");
    }
};

module.exports.getAllBandRoles = async function() {
    try{
        const response = await axios.get("http://localhost:8080/api/BandRole");

        return response.data;
    } catch(e) {
        return new Error("Could not get Band Role");
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

module.exports.deleteRole = async function (id: string): Promise<Role> {
    try {
        const response = await axios.delete("http://localhost:8080/api/job-roles/" + id);

        return response.data;
    } catch (e) {
    throw new Error("Could not delete role");
    }
};

module.exports.createRole = async function(role: Role): Promise<number> {
    const error: string = roleValidator.validateRole(role);
        if (error){
            throw new Error(error);
        }
        
        try{
            const response = await axios.post(this.URL, role);
            return response.data;
        } catch (e) {
            if (e.response.status == 400) {
                throw new Error("Invalid data");}
            else{
                throw new Error("Could not create Role");
            }
        }
};