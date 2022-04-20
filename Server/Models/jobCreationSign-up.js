import mongoose from "mongoose";

const employerSchema = {
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  workEmail: {
    type: String,
    required: true,
  },
  createPassword: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  }
}

const employerSignUp = mongoose.model("employerSignUp", employerSchema);

export default employerSignUp;