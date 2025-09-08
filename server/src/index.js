import express from "express";
import 'dotenv/config';
import { clerkMiddleware } from '@clerk/express'
import fileUplaod from "express-fileupload";
import path from "path";
import cors from "cors";

import userRoutes from "./routes/userRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import songRoutes from "./routes/songRoutes.js";
import statRoutes from "./routes/statRoutes.js";
import albumRoutes from "./routes/albumRoutes.js";
import connectDb from "./config/connectDb.js";

const app = express();
const __dirname = path.resolve();
const PORT = process.env.PORT || 8080;

app.use(express.json({
    limit: '1gb' // set limit to 1GB
}));
app.use(clerkMiddleware()); // this will add auth to req obj => req.auth
app.use(fileUplaod({
    useTempFiles: true, // use temporary files instead of memory
    tempFileDir: path.join(__dirname, 'tmp'), // directory for temporary files
    createParentPath: true, // create the directory if it doesn't exist
    limits: {
        fileSize: 10 * 1024 * 1024 // 10MB limit
    },
}));
app.use(cors({
    origin: process.env.FRONTEND_URL,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
}));


app.use('/api/auth', authRoutes)
app.use('/api/admin', adminRoutes)
app.use('/api/users', userRoutes)
app.use('/api/songs', songRoutes)
app.use('/api/albums', albumRoutes)
app.use('/api/stats', statRoutes)

//error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ success: false, error: process.env.NODE_ENV === 'development' ? err.message : "Internal Server Error" });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    connectDb();
})