import appSignUp from '../Models/jobApplicationSign-up.js';
// import mongoose from "mongoose"

// mongoose.connect("http:localhost:3200/postJobs/employer-signup")

// let db = mongoose.connection;

// db.on('error', console.log.bind(console, "connection error"));
// db.once('open', function(callback){
//     console.log("connection succeeded");
// })

export const getAppSignUp = async (req, res) => {
  console.log({ req });
  try {
    const postSignUpData = await appSignUp.find();

    res.status(200).json(postSignUpData);
  } catch (error) {
    console.error(error.message);
  }
};

export const createSignUpData = async (req, res) => {
  const body = req.body;

  const newPost = appSignUp({ ...body, createdAt: new Date().toISOString() });

  try {
    await newPost.save();

    res.status(201).json(newPost);
  } catch (error) {
    console.log(error.message);
  }
};
