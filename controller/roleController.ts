import { Role } from "../model/role";
import { Band } from "../model/band";
import { BandRole } from "../model/bandRole";
import { Application, Request, Response } from "express";

const roleService = require("../service/roleService");
const bandService = require("../service/bandService");

module.exports = function(app: Application){
    app.get("/roles", async (req: Request, res: Response) => {
        let roleData: Role[];
        let bandData: Band[];
        try{
            roleData = await roleService.getAllRoles();
            bandData = await bandService.getAllBands();
        } catch (e) {
            console.log(e);
        }
        res.render("roles", { roles : roleData, bands : bandData});
    });

    app.get("/job-roles", async (req: Request, res: Response) => {
        let data: BandRole[];
        try{
            data = await roleService.getAllBandRoles();
        } catch (e) {
            console.log(e);
        }
        res.render("roles", { bandRoles : data});
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
