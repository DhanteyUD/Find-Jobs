import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose"
import cors from "cors";
import dotenv from "dotenv";
// const routeUrl = require("./routes/posts.js")

import postRoutes from "./routes/Posts.js"
import router from "./routes/Posts.js";

dotenv.config();

const app = express();


// This is the middle ware
app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));

app.use(express.json());
app.use(cors());

app.use('/postJobs', router);

const CONNECTION_URL = "mongodb+srv://Job_Search:Job_Search123@cluster0.rsqyr.mongodb.net/JobSearchDatabase?retryWrites=true&w=majority";

const PORT = process.env.PORT || 3200;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true })
.then(() => console.log("Database is connected"))
.catch(err => console.log(err.message));

app.listen(PORT, () => console.log(`Server running on ${PORT}`))

// mongoose.set('useFindAndModify', true);
