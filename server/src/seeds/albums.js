import mongoose from "mongoose";
import { config } from "dotenv";
import Album from "../models/Album.js";
import Song from "../models/Song.js";

config();

const seedDatabase = async () => {
    try {
        await await mongoose.connect(process.env.MONGO_URI, {
            dbName: 'spotify'
        });

        // Clear existing data
        await Album.deleteMany({});
        await Song.deleteMany({});

        // First, create all songs
        const createdSongs = await Song.insertMany([
            {
                title: "City Rain",
                artist: "Urban Echo",
                image: {
                    imageId: "7.jpg",
                    imageUrl: "/cover-images/7.jpg",
                },
                audio: {
                    audioId: "7.mp3",
                    audioUrl: "/songs/7.mp3",
                },
                plays: Math.floor(Math.random() * 5000),
                duration: 39, // 0:39
            },
            {
                title: "Neon Lights",
                artist: "Night Runners",
                image: {
                    imageId: "5.jpg",
                    imageUrl: "/cover-images/5.jpg",
                },
                audio: {
                    audioId: "5.mp3",
                    audioUrl: "/songs/5.mp3",
                },
                plays: Math.floor(Math.random() * 5000),
                duration: 36, // 0:36
            },
            {
                title: "Urban Jungle",
                artist: "City Lights",
                image: {
                    imageId: "15.jpg",
                    imageUrl: "/cover-images/15.jpg",
                },
                audio: {
                    audioId: "15.mp3",
                    audioUrl: "/songs/15.mp3",
                },
                plays: Math.floor(Math.random() * 5000),
                duration: 36, // 0:36
            },
            {
                title: "Neon Dreams",
                artist: "Cyber Pulse",
                image: {
                    imageId: "14.jpg",
                    imageUrl: "/cover-images/14.jpg",
                },
                audio: {
                    audioId: "14.mp3",
                    audioUrl: "/songs/14.mp3",
                },
                plays: Math.floor(Math.random() * 5000),
                duration: 39, // 0:39
            },
            {
                title: "Summer Daze",
                artist: "Coastal Kids",
                image: {
                    imageId: "4.jpg",
                    imageUrl: "/cover-images/4.jpg",
                },
                audio: {
                    audioId: "4.mp3",
                    audioUrl: "/songs/4.mp3",
                },
                plays: Math.floor(Math.random() * 5000),
                duration: 24, // 0:24
            },
            {
                title: "Ocean Waves",
                artist: "Coastal Drift",
                image: {
                    imageId: "3.jpg",
                    imageUrl: "/cover-images/3.jpg",
                },
                audio: {
                    audioId: "3.mp3",
                    audioUrl: "/songs/3.mp3",
                },
                plays: Math.floor(Math.random() * 5000),
                duration: 28, // 0:28
            },
            {
                title: "Crystal Rain",
                artist: "Echo Valley",
                image: {
                    imageId: "16.jpg",
                    imageUrl: "/cover-images/16.jpg",
                },
                audio: {
                    audioId: "16.mp3",
                    audioUrl: "/songs/16.mp3",
                },
                plays: Math.floor(Math.random() * 5000),
                duration: 39, // 0:39
            },
            {
                title: "Starlight",
                artist: "Luna Bay",
                image: {
                    imageId: "10.jpg",
                    imageUrl: "/cover-images/10.jpg",
                },
                audio: {
                    audioId: "10.mp3",
                    audioUrl: "/songs/10.mp3",
                },
                plays: Math.floor(Math.random() * 5000),
                duration: 30, // 0:30
            },
            {
                title: "Stay With Me",
                artist: "Sarah Mitchell",
                image: {
                    imageId: "1.jpg",
                    imageUrl: "/cover-images/1.jpg",
                },
                audio: {
                    audioId: "1.mp3",
                    audioUrl: "/songs/1.mp3",
                },
                plays: Math.floor(Math.random() * 5000),
                duration: 46, // 0:46
            },
            {
                title: "Midnight Drive",
                artist: "The Wanderers",
                image: {
                    imageId: "2.jpg",
                    imageUrl: "/cover-images/2.jpg",
                },
                audio: {
                    audioId: "2.mp3",
                    audioUrl: "/songs/2.mp3",
                },
                plays: Math.floor(Math.random() * 5000),
                duration: 41, // 0:41
            },
            {
                title: "Moonlight Dance",
                artist: "Silver Shadows",
                image: {
                    imageId: "14.jpg",
                    imageUrl: "/cover-images/14.jpg",
                },
                audio: {
                    audioId: "14.mp3",
                    audioUrl: "/songs/14.mp3",
                },
                plays: Math.floor(Math.random() * 5000),
                duration: 27, // 0:27
            },
            {
                title: "Lost in Tokyo",
                artist: "Electric Dreams",
                image: {
                    imageId: "3.jpg",
                    imageUrl: "/cover-images/3.jpg",
                },
                audio: {
                    audioId: "3.mp3",
                    audioUrl: "/songs/3.mp3",
                },
                plays: Math.floor(Math.random() * 5000),
                duration: 24, // 0:24
            },
            {
                title: "Neon Tokyo",
                artist: "Future Pulse",
                image: {
                    imageId: "17.jpg",
                    imageUrl: "/cover-images/17.jpg",
                },
                audio: {
                    audioId: "17.mp3",
                    audioUrl: "/songs/17.mp3",
                },
                plays: Math.floor(Math.random() * 5000),
                duration: 39, // 0:39
            },
            {
                title: "Purple Sunset",
                artist: "Dream Valley",
                image: {
                    imageId: "12.jpg",
                    imageUrl: "/cover-images/12.jpg",
                },
                audio: {
                    audioId: "12.mp3",
                    audioUrl: "/songs/12.mp3",
                },
                plays: Math.floor(Math.random() * 5000),
                duration: 17, // 0:17
            },
        ]);

        // Create albums with references to song IDs
        const albums = [
            {
                title: "Urban Nights",
                artist: "Various Artists",
                image:{
                    imageId: "1.jpg",
                    imageUrl: "/albums/1.jpg",
                },
                releaseYear: 2024,
                songs: createdSongs.slice(0, 4).map((song) => song._id),
            },
            {
                title: "Coastal Dreaming",
                artist: "Various Artists",
                image:{
                    imageId: "2.jpg",
                    imageUrl: "/albums/2.jpg",
                },
                releaseYear: 2024,
                songs: createdSongs.slice(4, 8).map((song) => song._id),
            },
            {
                title: "Midnight Sessions",
                artist: "Various Artists",
                image:{
                    imageId: "3.jpg",
                    imageUrl: "/albums/3.jpg",
                },
                releaseYear: 2024,
                songs: createdSongs.slice(8, 11).map((song) => song._id),
            },
            {
                title: "Eastern Dreams",
                artist: "Various Artists",
                image:{
                    imageId: "4.jpg",
                    imageUrl: "/albums/4.jpg",
                },
                releaseYear: 2024,
                songs: createdSongs.slice(11, 14).map((song) => song._id),
            },
        ];

        // Insert all albums
        const createdAlbums = await Album.insertMany(albums);

        // Update songs with their album references
        for (let i = 0; i < createdAlbums.length; i++) {
            const album = createdAlbums[i];
            const albumSongs = albums[i].songs;

            await Song.updateMany({ _id: { $in: albumSongs } }, { albumId: album._id });
        }

        console.log("Database seeded successfully!");
    } catch (error) {
        console.error("Error seeding database:", error);
    } finally {
        mongoose.connection.close();
    }
};

seedDatabase();