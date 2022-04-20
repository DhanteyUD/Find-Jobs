import createJobs from "../Models/jobApplicationPost.js";

export const getRoutes = async (req, res) => {
  console.log({req})
  try {
    const postMessage = await createJobs.find();

    console.log(postMessage)

    res.status(200).json(postMessage);

  } catch (error) {
    res.status(404).json({message: error.message});
    
  }
} 

export const createPost = async (req, res) => {
  const body = req.body;

  const newPost = createJobs(body);

  try {

    await newPost.save();

    res.status(201).json(newPost);
    
  } catch (error) {
    res.status(409).json({message: error.message});
    
  }
} 