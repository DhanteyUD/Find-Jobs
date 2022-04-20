import employerSignUp from "../Models/jobCreationSign-up.js";

export const getEmployerSignUp = async (req, res) => {
  try {
    const postCreation = await employerSignUp.find();
    
    res.status(200).json(postCreation);
  } catch (error) {
    console.log(error);
  }
}

export const createEmployerSignUp = async (req, res) => {
  const body = req.body;

  const newPost = employerSignUp(body);

  try {

    await newPost.save();

    res.status(201).json(newPost);

  } catch (error) {
    console.log({message: error.message})
  }
}