import express from "express";
import jobs from "./jobsRoutes.js"

const routes = (app) => {
     app.route("/").get((req, res) => res.status(200).send("Hello World Nodejs"));

     app.use(express.json(), jobs);
};

export default routes