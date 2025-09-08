import express from "express";
import { protectRoute, requireAdmin } from "../middleware/authMiddleware.js";
import { checkAdmin, createAlbum, createSong, deleteAlbum, deleteSong } from "../controllers/adminController.js";

const adminRoutes = express.Router();

adminRoutes.use(protectRoute, requireAdmin);

adminRoutes.get("/check", checkAdmin);

adminRoutes.post('/song', createSong);
adminRoutes.delete('/song/:id', deleteSong);


adminRoutes.post('/album', createAlbum);
adminRoutes.delete('/album/:id', deleteAlbum);
export default adminRoutes;