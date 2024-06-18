import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.ObjectId },
    name : { 
        type: String, 
        required: [true, "The name of the vacancy is mandatory."] 
    },
    description: { 
        type: String , 
        required: [true, "The job description is mandatory."]
    },
    company: { 
        type: String, 
        required: [true, "The company name is mandatory."]
    },
    workModel: { type: String },
    workSchedule: { type: String },
    salary: {type: Number},

}, { versionKey: false });

const job = mongoose.model("Jobs", jobSchema);

export {job, jobSchema}