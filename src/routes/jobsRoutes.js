import express from "express";
import JobController from "../controllers/jobController.js";

const routes = express.Router();

routes.get("/jobs", JobController.getAllJobs);
routes.get("/jobs/:id", JobController.getOneJob);
routes.post("/jobs", JobController.createJob);
routes.put("/jobs/:id", JobController.updateJob);
routes.delete("/jobs/:id", JobController.deleteJob)


export default routes; 