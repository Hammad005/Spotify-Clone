import express from "express";
import 'dotenv/config';
import userRoutes from "./routes/userRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import songRoutes from "./routes/songRoutes.js";
import statRoutes from "./routes/statRoutes.js";
import albumRoutes from "./routes/albumRoutes.js";

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());


app.use('/api/auth', authRoutes)
app.use('/api/users', userRoutes)
app.use('/api/admin', adminRoutes)
app.use('/api/songs', songRoutes)
app.use('/api/albums', albumRoutes)
app.use('/api/stats', statRoutes)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})