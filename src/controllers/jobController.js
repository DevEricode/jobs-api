import job from "../models/Jobs.js";


class JobController {

    static async getAllJobs(req, res) {
        try {
            const allJobs = await job.find({})
            res.status(200).json(allJobs);

        } catch (e) {
            res.status(500).json({ message: `${e.message} - There was an error in the request.`});
        }
    };
   static async getOneJob(req, res) { 
         
        const jobID = req.params.id

         try {
            const getOneJob = await job.findById(jobID);
            res.status(200).json({message: "Job vacancy successfully found!", job: getOneJob});

        } catch (e) {
            res.status(500).json({ message: `${e.message} - There was an error in the request.` });
        }
    };
    static async createJob(req, res) {

        const getJob = req.body;
        
        try {
           const newJob =  await job.create(getJob);
            res.status(201).json({ message: `A new job vacancy has been created.`, job: newJob});

        } catch (e) {
            res.status(500).json({ message: `${e.message} - An error occurred in our system to register the vacancy.` });
        }
    };

    static async updateJob(req, res) {

        const jobId = req.params.id;

        try {
            const updateJob = await job.findByIdAndUpdate(jobId, req.body);
            res.status(200).json({ message: "Job vacancy updated successfully.",  job: updateJob});
            
        } catch (e) {
            res.status(500).json({ message: `${e.message} - An error occurred in our system to update a vacancy.` });
        }
    };
};

export default JobController;