import axios from "axios";
import { Role } from "../model/Role";

module.exports.getAllRoles = async function() {
    try{
        const response = await axios.get("http://localhost:8080/api/job-roles");
        console.log(response.data);

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