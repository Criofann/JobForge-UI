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

        console.log(data);

        res.render("update-role-select", { Role: data });
    });

    app.post("/update-role-select", async (req: Request, res: Response) => {
        req.session.roleToUpdate = req.body.role
        res.redirect('/update-role')
    });    

    app.get("/update-role", async (req: Request, res: Response) => {
        let data: Role;
        try{
            data = await roleService.getRoleByID(req.session.roleToUpdate);
        } catch (e) {
            console.log(e);
        }
        res.render("update-role", { Role : data });
    });

    app.post("/update-role", async (req: Request, res: Response) => {
        req.session.updatedRole = req.body
        res.redirect('/update-role-confirmation')
    });
    
    app.get('/update-role-confirmation', async (req:Request, res:Response) => {
        res.render('update-role-confirmation', req.session.roleToUpdate)
    })

    app.post('/update-role-confirmation',async (req:Request, res: Response) => {
        let data: Role = req.session.roleToUpdate
        let roleName: String

        try {
            roleName = await roleService.updateRoles(data)

            req.session.updatedRole = undefined

            res.redirect('/job-role/' + roleName)
        } catch (e) {
            console.error(e);

            res.locals.errormessage = e.message

            res.render('update-role-confirmation', req.session.updatedRole)
        }
    })
};