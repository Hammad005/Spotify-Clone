import express from "express";
import User from "../models/User.js";
import Song from "../models/Song.js";
import Album from "../models/Album.js";
import { protectRoute, requireAdmin } from "../middleware/authMiddleware.js";
const statRoutes = express.Router();

statRoutes.use(protectRoute, requireAdmin)

statRoutes.get('/', async (req, res, next) => {
    try {

        const [totalSongs, totalUsers, totalAlbums, uniqueArtists] = await Promise.all([
            Song.countDocuments(),
            User.countDocuments(),
            Album.countDocuments(),

            Song.aggregate([
                { $unionWith: { coll: "albums", pipeline: [] } },
                { $group: { _id: "$artist" } },
                { $count: "uniqueArtists" }
            ])
        ]);


        res.status(200).json({ success: true, data: { totalSongs, totalAlbums, totalUsers, uniqueArtists: uniqueArtists[0]?.count || 0 } });
    } catch (error) {
        next(error);
    }
});

export default statRoutes;