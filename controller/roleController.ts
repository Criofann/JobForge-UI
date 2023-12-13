import { Role } from "../model/Role";
import { JobFamily } from "../model/JobFamily";
import { RoleFamily } from "../model/RoleFamily";
import { Application, Request, Response } from "express";
const roleService = require('../service/roleService')
const familyService = require("../service/familyService")

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
        res.render('roles', { roles : data, bands : dataa})
    })
}