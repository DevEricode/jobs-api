import { job } from "../models/Jobs.js";


class JobController {

    static async getAllJobs(req, res, next) {
        try {
            const allJobs = await job.find({})
            res.status(200).json(allJobs);

        } catch (e) {
            next(e);
        }
    };

   static async getOneJob(req, res, next) { 
         
        const jobID = req.params.id

         try {
            const getOneJob = await job.findById(jobID);
            res.status(200).json({message: "Job vacancy successfully found!", job: getOneJob});

        } catch (e) {
            next(e);
        }
    };

    static async createJob(req, res, next) {
        
        try {
           const newJob =  await job.create(req.body);
            res.status(201).json({ message: `A new job vacancy has been created.`, job: newJob});

        } catch (e) {
            next(e);
        }
    };

    static async updateJob(req, res, next) {

        const jobId = req.params.id;

        try {
            const updateJob = await job.findByIdAndUpdate(jobId, req.body);
            res.status(200).json({ message: "Job vacancy updated successfully.",  job: updateJob});
            
        } catch (e) {
            next(e);
        }
    };
    
    static async deleteJob(req, res, next) {
        
        const jobID = req.params.id

        try {
            await job.findByIdAndDelete(jobID);
            res.status(204)

        } catch (e) {
            next(e);
        }
    };

    static async searchByWorkModel(req, res) {
        
        const workModel = req.query.workModel;

        try {

            const searchWorkModel = await job.find({ workModel: workModel });
            res.status(200).json({ message: `Vacancies found successfully.`, jobs: searchWorkModel });

        } catch (e) {
            res.status(500).json({ message: `${e.message} - Search request failed!` })

        }

    };

    static async searchByCompany(req, res) {
        
        const company = req.query.company;

        try {

            const searchCompany = await job.find({ company: company });
            res.status(200).json({ message: `Vacancies found successfully.`, jobs: searchCompany });

        } catch (e) {
            res.status(500).json({ message: `${e.message} - Search request failed!` })

        }

    };

};

export default JobController;