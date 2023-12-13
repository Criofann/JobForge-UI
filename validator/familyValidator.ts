import { JobFamily } from "../model/JobFamily";

module.exports.validatefamily = function (jobFamily: JobFamily):string{
    if(jobFamily.roleName.length > 20){
        return "name is grater than 20 charactors"
    }
    if(jobFamily.jobFamily.length > 20){
        return "name is grater than 20 charactors"
    }
    return null
}