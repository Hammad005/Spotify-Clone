import cloudinary from "../lib/cloudinary.js";
import Album from "../models/Album.js";
import Song from "../models/Song.js";

const uploadToCloudinary = async (file, folderName) => {
    try {
        const result = await cloudinary.uploader.upload(file.tempFilePath, { folder: folderName, resource_type: 'auto' });
        return { url: result.secure_url, id: result.public_id };
    } catch (error) {
        console.error('Cloudinary upload error:', error);
        throw new Error('Cloudinary upload failed');
    }
};

export const checkAdmin = async (req, res, next) => {
    res.status(200).json({ admin: true });
};

export const createSong = async (req, res, next) => {
    try {
        if (!req.files || !req.files.audioFile || !req.files.imageFile) {
            return res.status(400).json({ error: 'Please upload audio and image files' });
        }
        const { title, artist, albumId, duration } = req.body;
        const audioFile = req.files.audioFile;
        const imageFile = req.files.imageFile;

        // Here you would typically upload the files to a cloud storage service
        const audio = await uploadToCloudinary(audioFile, "Spotify/Songs");
        const image = await uploadToCloudinary(imageFile, "Spotify/SongsImages");

        const song = new Song({
            title,
            artist,
            image: {
                imageId: image.id,
                imageUrl: image.url
            },
            audio: {
                audioId: audio.id,
                audioUrl: audio.url
            },
            duration,
            albumId: albumId || null,
        });
        await song.save();
        if (albumId) {
            await Album.findByIdAndUpdate(albumId, { $push: { songs: song._id } });
        }
        res.status(201).json({ message: 'Song created successfully', song });
    } catch (error) {
        next(error);
    }
};

export const deleteSong = async (req, res, next) => {
    try {
        const { id } = req.params;
        const song = await Song.findById(id);

        // if song belongs to an album, remove it from the album's songs array
        if (song.albumId) {
            await Album.findByIdAndUpdate(song.albumId, { $pull: { songs: id } });
        };

        await cloudinary.uploader.destroy(song.audio.audioId);
        await cloudinary.uploader.destroy(song.image.imageId);

        await Song.findByIdAndDelete(id);
        res.status(200).json({ message: 'Song deleted successfully' });
    } catch (error) {
        next(error);
    }
};


export const createAlbum = async (req, res, next) => {
    try {
        const { title, artist, releaseYear } = req.body;
        const imageFile = req.files?.imageFile;

        const image = await uploadToCloudinary(imageFile, "Spotify/AlbumImages");

        const album = new Album({
            title,
            artist,
            image: {
                imageId: image.id,
                imageUrl: image.url
            },
            releaseYear,
        });
        await album.save();
        res.status(201).json({ message: 'Album created successfully', album });
    } catch (error) {
        next(error);
    }
};

export const deleteAlbum = async (req, res, next) => {
    try {
        const { id } = req.params;
        const songs = await Song.find({ albumId: id });
        for (const song of songs) {
            await cloudinary.uploader.destroy(song.audio.audioId);
            await cloudinary.uploader.destroy(song.image.imageId);
            await Song.findByIdAndDelete(song._id);
        }


        const album = await Album.findById(id);
        await cloudinary.uploader.destroy(album.image.imageId);

        await Album.findByIdAndDelete(id);

        res.status(200).json({ message: 'Album deleted successfully' });
    } catch (error) {
        next(error);
    }
};