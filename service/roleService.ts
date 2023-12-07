import axios from "axios";


module.exports.getAllRoles = async function() {
    try{
        const response = await axios.get('http://localhost:8080/api/job-roles')

        return response.data
    } catch(e) {
        console.error("get request failed for api/job-roles");
        return new Error('Could not get roles')
    }
}