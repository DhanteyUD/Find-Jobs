import express from "express";
import { getRoutes, createPost } from "../Controllers/jobApplicationPost.js";
import { getRoute, createPosts } from "../Controllers/jobCreationPost.js";
import { getAppSignUp, createSignUpData } from "../Controllers/applicationSign-up.js";
import { getEmployerSignUp, createEmployerSignUp } from "../Controllers/jobCreationSign-up.js";


var router = express.Router();

// JobApplication
router.get('/', getRoutes);
router.post('/', createPost);

// JobCreation
router.get('/createjobs', getRoute);
router.post('/postjobs', createPosts);

// Job Application Sign uploaded
router.get('/application-sign-up', getAppSignUp);
router.post('/application-signup', createSignUpData);

// Job Employer Sign uploaded
router.get('/employer-sign-up', getEmployerSignUp);
router.post('/employer-signup', createEmployerSignUp);

export default router;