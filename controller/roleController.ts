import { Role } from "../model/Role";
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

    app.get("/update-role-select", async (req: Request, res: Response) => {
        let data: Role;

        try {
            data = await roleService.getAllRoles();
        } catch (e) {
            console.error(e);
        }

        res.render("update-role-select", { Roles: data });
    });

    app.post("/update-role-select", async (req: Request, res: Response) => {
        console.log(req.body)
        req.session.roleToUpdate = req.body.roleName
        res.redirect('/update-role')
    });    

    app.get("/update-role", async (req: Request, res: Response) => {
        let data: Role;
        try{
            data = await roleService.getRoleByID(req.session.roleToUpdate);
            console.log(data)
        } catch (e) {
            console.log(e);
        }
        res.render("update-role", { Role : data });
    });

    app.post("/update-role", async (req: Request, res: Response) => {
        console.log(req.body)

        req.session.updatedRole = req.body
        res.redirect('/update-role-confirmation')
    });
    
    app.get('/update-role-confirmation', async (req:Request, res:Response) => {
        res.render('update-role-confirmation', req.session.updatedRole)
    })

    app.post('/update-role-confirmation',async (req:Request, res: Response) => {
        let data: Role = req.session.updatedRole
        let roleName: String
        console.log(req.session.updatedRole)
        console.log("break point")
        console.log(data)

        try {
            roleName = await roleService.updateRoles(req.session.roleToUpdate, data)

            req.session.updatedRole = undefined

            res.redirect('/view-role')
        } catch (e) {
            console.error(e);

            res.locals.errormessage = e.message

            res.render('update-role-confirmation', req.session.updatedRole)
        }
    })
};