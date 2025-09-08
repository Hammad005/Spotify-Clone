import express from "express";
import { getAlbumById, getAllAlbums } from "../controllers/AlbumControllers.js";
const albumRoutes = express.Router();

albumRoutes.get('/', getAllAlbums);
albumRoutes.get('/:albumId', getAlbumById);

export default albumRoutes;