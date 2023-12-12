import { Role } from "../model/Role";
import { JobFamily } from "../model/JobFamily";
import { RoleFamily } from "../model/RoleFamily";
import { Application, Request, Response } from "express";


const roleService = require('../service/roleService')
const familyService = require("../service/familyService")

module.exports = function(app: Application){
    app.get("/job-roles", async (req: Request, res: Response) => {
        let data: Role[];
        try{
            data = await roleService.getAllRoles();
        } catch (e) {
            console.log(e);
        }
        res.render('roles', { roles : data})
    })
    app.get('/add-job-role', async(req: Request, res: Response)=>{
        res.render('add-job-role')
        
    })
    app.post('/add-job-role',  async (req:  Request, res: Response) => {
        let data: RoleFamily = req.body
        let family: JobFamily = {roleName: data.roleName, jobFamily: data.jobFamily}
        delete data.jobFamily
        let role: Role = data
        let id: number
        try{
            id = await roleService.createRole(role)
            id = await familyService.createFamily(family)
            

            //res.redirect('home')
        }catch(e) {
            

            res.locals.errormessage = e.message
            res.render('add-job-role', req.body)
        }
        
        
    })
}
/*
try{
            id = await orderService.createOrder(data)
            

            res.redirect('/orders/'+id)
        }catch(e) {
            let customers: Customer[] = await customerService.getCustomers();
            

            res.locals.errormessage = e.message
            res.locals.customers = customers

            res.render('add-order', req.body)
        }
*/