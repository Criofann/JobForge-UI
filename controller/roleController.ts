import { Role } from "../model/Role";
import { Application, Request, Response } from "express";

const roleService = require("../service/roleService");

module.exports = function(app: Application){
    app.get("/job-role-spec-delete/:roleName", async (req: Request, res: Response) => {
        let data: Role;
        try {
            data = await roleService.getRoleByID(req.params.roleName);
        } catch (e) {
            console.error(e);
        }
        res.render("job-role-spec-admin", { role: data });
    });

    app.get("/job-roles-delete", async (req: Request, res: Response) => {
        let data: BandRole[];
        try{
            data = await roleService.getAllBandRoles();
        } catch (e) {
            console.log(e);
        }
        res.render("roles-delete", { bandRoles : data});
    });

    app.post("/delete-role", async (req: Request, res: Response) => {
        const id: Role = req.body.roleName;
        try{
            await roleService.deleteRole(id);
        } catch (e) {
            console.log(e);
        }
        res.redirect("/job-roles-delete");
    });
}