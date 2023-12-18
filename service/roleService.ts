import axios from "axios";

module.exports.getAllRoles = async function() {
    try{
        const response = await axios.get("http://localhost:8080/api/job-roles");

        return response.data;
    } catch(e) {
        console.error("get request failed for api/job-roles");
        return new Error("Could not get roles");
    }
};

module.exports.getAllBandRoles = async function() {
    try{
        const response = await axios.get("http://localhost:8080/api/BandRole");

        return response.data;
    } catch(e) {
        console.error("Could not get the Band Roles");
        return new Error("Could not get Band Role");
    }
};