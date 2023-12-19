import axios from "axios";
import { Role } from "../model/Role";
const roleValidator = require("../validator/roleValidator")

module.exports.getAllRoles = async function() {
    try{
        const response = await axios.get("http://localhost:8080/api/job-roles");

        return response.data;
    } catch(e) {
        console.error("get request failed for api/job-roles");
        return new Error("Could not get roles");
    }
}
module.exports.createRole = async function(role: Role): Promise<number> {
    const error: string = roleValidator.validateRole(role)
        if (error){
            throw new Error(error)
        }
        
        try{
            console.log('role')
            console.log(role)
            const response = await axios.post('http://localhost:8080/api/job-roles/', role)
            return response.data
        } catch (e) {
            if (e.response.status == 400) {
                console.log('here')
                throw new Error('Invalid data')}
            else{
                throw new Error('Could not create Role')
            }
        }
    }
    
