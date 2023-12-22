import { Application, Request, Response } from "express";
import { Login } from "../model/Login";
const authService = require("../service/authService");

module.exports = function(app: Application){
    app.get("/login", async (req: Request, res: Response) =>{
        res.render("login");
    });

    app.post("/login", async(req: Request, res: Response) =>{
        const data: Login = req.body;
        try{
            req.session.token = await authService.login(data);

            res.redirect("menu");
        } catch(e){
            console.error(e);
            res.locals.errormessage = e.message;

            res.render("login", req.body);
        }
    });

    app.get("/menu", async (req: Request, res: Response) =>{
        res.render("menu");
    });
};