
import express from "express";
import 'dotenv/config'
import cookieParser from "cookie-parser";
import helmet from "helmet";
import cors from "cors";
import rateLimit from "express-rate-limit";
import mongoose from "mongoose";
import router from "./routes/api.js";
import { MAX_JSON_SIZE, MONGO_URL, PORT, REQUEST_NUMBER, REQUEST_TIME, URL_ENCODE, WEB_CACHE } from "./app/config/config.js";

const app = express();

// Security middleware
app.use(cookieParser());
app.use(helmet());
app.use(cors());

// parsing
app.use(express.json({limit: MAX_JSON_SIZE}));
app.use(express.urlencoded({extended: URL_ENCODE}));

// Rate limiter
const limiter = rateLimit({ windowMs: REQUEST_TIME,  max: REQUEST_NUMBER});

app.use(limiter);

app.set('etag', WEB_CACHE);



// Mongodb connection
mongoose.connect(MONGO_URL).then((res)=>{
    console.log("Database Connect");
    
}).catch((err)=>{
    console.log(err);
    
})

app.use('/api/v1', router);



app.listen(PORT, ()=>{
    console.log("Server running", PORT);
    
})



export default app;