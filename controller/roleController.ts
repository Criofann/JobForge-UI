import { Role } from "../model/role";
import { Band } from "../model/band";
import { Application, Request, Response } from "express";
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

    app.get("/job-roles/:roleName", async (req: Request, res: Response) => {
        let data: Role;

        try {
            data = await roleService.getRoleByID(req.params.roleName);
        } catch (e) {
            console.error(e);
        }

        console.log(data);

        res.render("job-roles", { Role: data });
    });

    app.get("/update-roles", async (req: Request, res: Response) => {
        let data: Role[];
        try{
            data = await roleService.getAllRoles();
        } catch (e) {
            console.log(e);
        }
        res.render("update-role", {roles : data});
    });

    app.post("/update-roles/", async (req: Request, res: Response) => {
        const updatedRole: Role = req.body;
        const roleName: string = updatedRole.roleName;
    
        try {
            await roleService.updateRoles(roleName, updatedRole);
            res.status(200).send("Role updated successfully");
        } catch (e) {
            console.error(e);
            res.status(500).send("Failed to update role");
        }
    });    
};