import Song from "../models/Song.js";

export const getAllSongs = async (req, res, next) => {
    try {
        const songs = await Song.find().sort({ createdAt: -1 });
        res.status(200).json(songs);
    } catch (error) {
        next(error);
    }
};

export const getFeaturedSongs = async (req, res, next) => {
    try {
        const songs = await Song.aggregate([
            { $sample: { size: 6 } }, // randomly select 10 songs
            { $project: { _id: 1, title: 1, artist: 1, image: 1, audio: 1 } } // select only necessary fields
        ])
        res.status(200).json(songs);
    } catch (error) {
        next(error);
    }
};
export const getMadeForYouSongs = async (req, res, next) => {
    try {
        const songs = await Song.aggregate([
            { $sample: { size: 4 } }, // randomly select 10 songs
            { $project: { _id: 1, title: 1, artist: 1, image: 1, audio: 1 } } // select only necessary fields
        ])
        res.status(200).json(songs);
    } catch (error) {
        next(error);
    }
};
export const getTrendingSongs = async (req, res, next) => {
    try {
        const songs = await Song.aggregate([
            { $sample: { size: 4 } }, // randomly select 10 songs
            { $project: { _id: 1, title: 1, artist: 1, image: 1, audio: 1 } } // select only necessary fields
        ])
        res.status(200).json(songs);
    } catch (error) {
        next(error);
    }
};