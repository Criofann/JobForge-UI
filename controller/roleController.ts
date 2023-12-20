import { Role } from "../model/Role";
import { JobFamily } from "../model/JobFamily";
import { RoleFamily } from "../model/RoleFamily";
import { Application, Request, Response } from "express";

const roleService = require("../service/roleService");
const familyService = require("../service/familyService");

module.exports = function(app: Application){
    app.get("/job-roles", async (req: Request, res: Response) => {
        let data: Role[];
        try{
            data = await roleService.getAllRoles();
        } catch (e) {
            console.log(e);
        }
        res.render("roles", { roles : data});
    });
    app.get("/add-job-role", async(req: Request, res: Response)=>{
        res.render("add-job-role");
        
    });
    app.post("/add-job-role",  async (req:  Request, res: Response) => {
        const data: RoleFamily = req.body;
        const family: JobFamily = {roleName: data.roleName, jobFamily: data.jobFamily};
        delete data.jobFamily;
        const role: RoleFamily = data;
        try{
             await roleService.createRole(role);
             await familyService.createFamily(family);
            

        }catch(e) {
            

            res.locals.errormessage = e.message;
            res.render("add-job-role", req.body);
        }
        
        
    });
};
