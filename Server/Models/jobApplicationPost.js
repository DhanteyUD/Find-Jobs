import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  uploadCv: {
    type: String,
    required: true,
  },
});

const createJobs = mongoose.model('createJobs', postSchema);

export default createJobs;