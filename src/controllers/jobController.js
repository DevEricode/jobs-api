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
    async getOneJob(req, res) { 
         
        const jobID = req.params.id

         try {
            const getOneJob = await job.findById(jobID);
            res.status(200).json({message: "Job vacancy successfully found!", job: getOneJob});

        } catch (e) {
            res.status(500).json({ message: `${e.message} - There was an error in the request.` });
        }
    };

};

export default JobController;