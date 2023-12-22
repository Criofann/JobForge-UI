import { Role } from "../model/Role";
import { Application, Request, Response } from "express";
import { Band } from "../model/band";

const roleService = require("../service/roleService");
const bandService = require("../service/bandService");

module.exports = function(app: Application){
    app.get("/job-roles", async (req: Request, res: Response) => {
        let data: Role[];
        let dataa: Band[];
        try{
            data = await roleService.getAllRoles();
            dataa = await bandService.getAllBands();
        } catch (e) {
            console.log(e);
        }
        res.render("roles", { roles : data, bands : dataa});
    });
    app.get("/add-job-role", async(req: Request, res: Response)=>{
        res.render("add-job-role");
        
    });
    app.post("/add-job-role",  async (req:  Request, res: Response) => {
        const role: Role = req.body;
        try{
             await roleService.createRole(role);
        }
        catch(e) {
            res.locals.errormessage = e.message;
            res.render("add-job-role", req.body);
        } 
    });
       

    app.get("/job-role-spec/:roleName", async (req: Request, res: Response) => {
        let data: Role;
        try {
            data = await roleService.getRoleByID(req.params.roleName);
        } catch (e) {
            console.error(e);
        }

        res.render("job-role-spec", { role: data });
    });
};
