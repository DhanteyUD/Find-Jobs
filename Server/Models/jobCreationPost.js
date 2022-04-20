import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  jobTitle: {
    type: String,
    required: true,
  },
  companyName: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  employmentType: {
    type: String,
    required: true,
  },
  salary: {
    type: String,
    required: true,
  },
  submissionDeadline: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  sector: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  }
});

const postJobs = mongoose.model('PostJobs',postSchema);

export default postJobs;