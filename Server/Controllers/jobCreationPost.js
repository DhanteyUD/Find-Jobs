import PostJobs from "../Models/jobCreationPost.js";
export const getRoute = async (req, res) => {
  try {
    const postMessage = await PostJobs.find();

    res.status(200).json(postMessage);

  } catch (error) {
    res.status(404).json({message: error.message});
    
  }
} 

export const createPosts = async (req, res) => {
  const body = req.body;
  console.log(body);

  const newPost = PostJobs(body);

  try {

    await newPost.save();

    res.status(201).json(newPost);
    
  } catch (error) {
    res.status(409).json({message: error.message});
    
  }
} 