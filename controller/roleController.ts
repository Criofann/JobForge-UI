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

    app.get("/menu", async (req: Request, res: Response) => {
        res.render("menu");
    });
};