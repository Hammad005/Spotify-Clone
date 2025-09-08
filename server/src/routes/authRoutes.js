import express from "express";
import { callback } from "../controllers/authControllers.js";
const authRoutes = express.Router();

authRoutes.post('/callback', callback);

export default authRoutes;