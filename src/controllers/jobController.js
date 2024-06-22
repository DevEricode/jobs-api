import { job as Job } from "../models/Jobs.js";


class JobController {

    static async getAllJobs(req, res, next) {
        try {
            const allJobs = await Job.find({})
            res.status(200).json(allJobs);

        } catch (e) {
            next(e);
        }
    };

   static async getOneJob(req, res, next) { 
         
        const jobID = req.params.id

         try {
            const getOneJob = await Job.findById(jobID);
            res.status(200).json({message: "Job vacancy successfully found!", job: getOneJob});

        } catch (e) {
            next(e);
        }
    };

    static async createJob(req, res, next) {
        
        try {
           const newJob =  await Job.create(req.body);
            res.status(201).json({ message: `A new job vacancy has been created.`, job: newJob});

        } catch (e) {
            next(e);
        }
    };

    static async updateJob(req, res, next) {

        const jobId = req.params.id;

        try {
            const updateJob = await Job.findByIdAndUpdate(jobId, req.body);
            res.status(200).json({ message: "Job vacancy updated successfully.",  job: updateJob});
            
        } catch (e) {
            next(e);
        }
    };
    
    static async deleteJob(req, res, next) {
        
        const jobID = req.params.id

        try {
            await Job.findByIdAndDelete(jobID);
            res.status(204)

        } catch (e) {
            next(e);
        }
    };

    static async searchByFilter(req, res, next) {
        try {
            const search = await searchParameters(req.query);

            if (search !== null) {
                req.result = Job.find(search);
                next();
            } else {
                res.status(200).send([]);
            }
        } catch (e) {
            
        }
    };
};

async function searchParameters(parameters) {
        
    const { name, company, workModel, workSchedule, salaryMin, salaryMax, minPages, maxPages } = parameters;
    let search = {};

    if(name) search.name = { $regex: name, $options: "i" };
    if(company) search.company = company;
    if(workModel) search.workModel = workModel;
    if(workSchedule) search.workSchedule = workSchedule;

    if(salaryMin || salaryMax) search.salary = {};
    if(salaryMin) search.salary.$gte = salaryMin
    if(salaryMax) search.salary.$lte = salaryMax

    if (minPages || maxPages) search.numPages = {};
	if (minPages) search.numPages.$gte = minPages;
	if (maxPages) search.numPages.$lte = maxPages;


    return search;
};


export default JobController;