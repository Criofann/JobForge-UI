import { Role } from "../model/Role";
import { Application, Request, Response } from "express";


const roleService = require("../service/roleService");


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
        const role: Role = req.body;
        try{
             await roleService.createRole(role);
             res.redirect("http://localhost:3000/job-roles");
        }
        catch(e) {
            res.locals.errormessage = e.message;
            res.render("add-job-role", req.body);
        } 
    });
       

   
};
