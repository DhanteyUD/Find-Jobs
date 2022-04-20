import mongoose from "mongoose";

const appSchema = {
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
  password: String,
  dateOfBirth: {
    day: {
      type: String,
      required: true,
    },
    month: {
      type: String,
      required: true,
    },
    year: {
      type: String,
      required: true,
    }
  },
  gender: {
    type: String,
    required: true,
  },
  nationality: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  countryCode: {
    type: String,
    required: true,
  },
  mobileNo: {
    type: String,
    required: true,
  },
  createdAt: {
    type: String,
    required: true,
  },
}

const appSignUp = 
  mongoose.model('appSignUp', appSchema);

  export default appSignUp;
