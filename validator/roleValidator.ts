import { Role } from "../model/Role";
module.exports.validateRole = function (role: Role):string{
    if(role.roleName.length > 20){
        return "name is grater than 20 charactors"
    }
    if(role.specification.length > 100){
        return "spec greater than 100 charactors"
    }
    if(role.capabilityName.length>20){
        return "capability greater than 20 charactors"
    }
    if(role.bandName.length>20){
        return "band name greater than 20 charactors"
    }
    if (role.responsibilities.length > 100) {
        return "responsibilities greater than 100 charactors";
    }
    let url:any = role.sharepointLink
    if(!URL.canParse(url)){
        return "Not a valid link";
    }

    return null
}







import { Role } from "../model/role";

module.exports.validateRole = function (role: Role): string {
    if (role.roleName.length > 80) {
        return "Role name greater than 80 characters";
    }
    if (role.capabilityName.length > 80) {
        return "Capability name greater than 80 characters";
    }
    if (role.bandName.length > 80) {
        return "Band name greater than 80 characters";
    }
    return null
}