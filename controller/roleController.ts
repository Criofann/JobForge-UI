import { Role } from "../model/Role";
import { Band } from "../model/band";
import { Application, Request, Response } from "express";

const roleService = require("../service/roleService");
const bandService = require("../service/bandService");

module.exports = function(app: Application){
    app.get("/job-roles", async (req: Request, res: Response) => {
        let data: Role[];
        let bands: Band[];
        try{
            data = await roleService.getAllRoles();
            bands = await bandService.getAllBands();
        } catch (e) {
            console.log(e);
        }
        res.render("roles", { roles : data, bands : bands});
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
