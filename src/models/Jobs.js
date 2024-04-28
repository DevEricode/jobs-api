import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.ObjectId },
    name : { type: String },
    description: { type: String },
    workModel: { type: String },
    workSchedule: { type: String },
    salary: {type: Number},

}, { versionKey: false });

const job = mongoose.model("Jobs", jobSchema);

export default job