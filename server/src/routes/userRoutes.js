import express from "express";
import { protectRoute } from "../middleware/authMiddleware.js";
import { getAllUsers } from "../controllers/userControllers.js";
const userRoutes = express.Router();

userRoutes.get('/', protectRoute, getAllUsers);

export default userRoutes;