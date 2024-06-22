import express from "express";
import JobController from "../controllers/jobController.js";
import filtersPagination from "../middlewares/filtersPagination.js"

const routes = express.Router();

routes.get("/api/v1/jobs", JobController.getAllJobs);
routes.get("/api/v1/jobs/search", JobController.searchByFilter, filtersPagination);
routes.get("/api/v1/jobs/:id", JobController.getOneJob);
routes.post("/api/v1/jobs", JobController.createJob);
routes.put("/api/v1/jobs/:id", JobController.updateJob);
routes.delete("/api/v1/jobs/:id", JobController.deleteJob)


export default routes; 