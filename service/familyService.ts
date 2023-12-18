import axios from "axios";
import { RoleFamily } from "../model/RoleFamily";
const familyValidator = require("../validator/familyValidator");

module.exports.createFamily = async function(RoleFamily: RoleFamily): Promise<number> {
    const error: string = familyValidator.validatefamily(RoleFamily);
        if (error){
            throw new Error(error);
        }
        
        try{
            console.log(RoleFamily);
            const response = await axios.post("http://localhost:8080/api/job-family/", RoleFamily);
            return response.data;
        } catch (e) {
            throw new Error("Could not create family");
        };
};
    