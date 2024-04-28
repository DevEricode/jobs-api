import express from "express";

const routes = express.Router();

routes.get("/jobs", (req, res) => {
    res.status(200).send("Testando");
});


export default routes; 