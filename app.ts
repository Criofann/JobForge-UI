import { Request, Response } from "express";
import { Role } from "./model/Role";

const express = require("express");
const path = require("path");
const nunjucks = require("nunjucks");

const app = express();

app.use("/public", express.static(path.join(__dirname,"public")));

app.use(express.json());

app.use(express.urlencoded({ extended: true}));

// Configure Nunjucks
const appViews = path.join(__dirname, "/views/");

const nunjucksConfig = {
    autoescape: true,
    noCache: true,
    express: app
};

nunjucks.configure(appViews, nunjucksConfig);

// Configure Express
app.set('view engine', 'html');

app.use('/public', express.static(path.join(__dirname, 'public')));

app.use(express.json())

app.use(express.urlencoded({ extended: true }));

declare module 'express-session' {
    interface SessionData {
        roleToUpdate: Role;
        updatedRole: Role;
    }
}

app.listen(3000, () => {
    console.log("Server listening on port 3000");
});

// Express Routes
app.get("/", (req: Request, res: Response) => {
    res.render("index");
});

require("./controller/roleController")(app);