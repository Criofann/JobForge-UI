import axios from "axios";
import { Role } from "../model/role";
import { BandRole } from "../model/bandRole";

module.exports.getAllBands = async function() {
    try{
        const response = await axios.get('http://localhost:8080/api/band')

        return response.data
    } catch(e) {
        console.error("get request failed for api/band");
        return new Error('Could not get Bands')
    }
}