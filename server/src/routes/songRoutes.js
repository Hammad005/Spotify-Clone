import express from "express";
import { getAllSongs, getFeaturedSongs, getMadeForYouSongs, getTrendingSongs } from "../controllers/songController.js";
import { protectRoute, requireAdmin } from "../middleware/authMiddleware.js";
const songRoutes = express.Router();

songRoutes.get('/', protectRoute, requireAdmin, getAllSongs);
songRoutes.get('/featured', getFeaturedSongs);
songRoutes.get('/made-for-you', getMadeForYouSongs);
songRoutes.get('/trending', getTrendingSongs);

export default songRoutes;