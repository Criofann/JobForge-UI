import { Role } from "../model/Role";
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
    return null;
};