import { Role } from "../model/role";
import { Band } from "../model/band";
import { Application, Request, Response } from "express";

const roleService = require('../service/roleService')
const bandService = require('../service/bandService')

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