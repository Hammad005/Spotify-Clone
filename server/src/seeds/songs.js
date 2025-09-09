import mongoose from "mongoose";
import { config } from "dotenv";
import Song from "../models/Song.js";

config();

const songs = [
	{
		title: "Stay With Me",
		artist: "Sarah Mitchell",
        image:{
            imageId: "1.jpg",
            imageUrl: "/cover-images/1.jpg",
        },
        audio:{
            audioId: "1.mp3",
            audioUrl: "/songs/1.mp3",
        },
		duration: 46, // 0:46
	},
	{
		title: "Midnight Drive",
		artist: "The Wanderers",
        image:{
            imageId: "2.jpg",
            imageUrl: "/cover-images/2.jpg",
        },
        audio:{
            audioId: "2.mp3",
            audioUrl: "/songs/2.mp3",
        },
		duration: 41, // 0:41
	},
	{
		title: "Lost in Tokyo",
		artist: "Electric Dreams",
        image:{
            imageId: "3.jpg",
            imageUrl: "/cover-images/3.jpg",
        },
        audio:{
            audioId: "3.mp3",
            audioUrl: "/songs/3.mp3",
        },
		duration: 24, // 0:24
	},
	{
		title: "Summer Daze",
		artist: "Coastal Kids",
        image:{
            imageId: "4.jpg",
            imageUrl: "/cover-images/4.jpg",
        },
        audio:{
            audioId: "4.mp3",
            audioUrl: "/songs/4.mp3",
        },
		duration: 24, // 0:24
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
		duration: 36, // 0:36
	},
	{
		title: "Mountain High",
		artist: "The Wild Ones",
        image:{
            imageId: "6.jpg",
            imageUrl: "/cover-images/6.jpg",
        },
        audio:{
            audioId: "6.mp3",
            audioUrl: "/songs/6.mp3",
        },
		duration: 40, // 0:40
	},
	{
		title: "City Rain",
		artist: "Urban Echo",
        image:{
            imageId: "7.jpg",
            imageUrl: "/cover-images/7.jpg",
        },
        audio: {
            audioId: "7.mp3",
            audioUrl: "/songs/7.mp3",
        },
		duration: 39, // 0:39
	},
	{
		title: "Desert Wind",
		artist: "Sahara Sons",
        image:{
            imageId: "8.jpg",
            imageUrl: "/cover-images/8.jpg",
        },
        audio:{
            audioId: "8.mp3",
            audioUrl: "/songs/8.mp3",
        },
		duration: 28, // 0:28
	},
	{
		title: "Ocean Waves",
		artist: "Coastal Drift",
        image:{
            imageId: "9.jpg",
            imageUrl: "/cover-images/9.jpg",
        },
        audio:{
            audioId: "9.mp3",
            audioUrl: "/songs/9.mp3",
        },
		duration: 28, // 0:28
	},
	{
		title: "Starlight",
		artist: "Luna Bay",
        image:{
            imageId: "10.jpg",
            imageUrl: "/cover-images/10.jpg",
        },
        audio: {
            audioId: "10.mp3",
            audioUrl: "/songs/10.mp3",
        },
		duration: 30, // 0:30
	},
	{
		title: "Winter Dreams",
		artist: "Arctic Pulse",
        image: {
            imageId: "11.jpg",
            imageUrl: "/cover-images/11.jpg",
        },
        audio: {
            audioId: "11.mp3",
            audioUrl: "/songs/11.mp3",
        },
		duration: 29, // 0:29
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
		duration: 17, // 0:17
	},
	{
		title: "Neon Dreams",
		artist: "Cyber Pulse",
        image: {
            imageId: "13.jpg",
            imageUrl: "/cover-images/13.jpg",
        },
        audio: {
            audioId: "13.mp3",
            audioUrl: "/songs/13.mp3",
        },
		duration: 39, // 0:39
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
		duration: 27, // 0:27
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
		duration: 36, // 0:36
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
		duration: 39, // 0:39
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
		duration: 39, // 0:39
	},
	{
		title: "Midnight Blues",
		artist: "Jazz Cats",
        image: {
            imageId: "18.jpg",
            imageUrl: "/cover-images/18.jpg",
        },
        audio: {
            audioId: "18.mp3",
            audioUrl: "/songs/18.mp3",
        },
		duration: 29, // 0:29
	},
];

const seedSongs = async () => {
	try {
		await await mongoose.connect(process.env.MONGO_URI, {
            dbName: 'spotify'
        });

		// Clear existing songs
		await Song.deleteMany({});

		// Insert new songs
		await Song.insertMany(songs);

		console.log("Songs seeded successfully!");
	} catch (error) {
		console.error("Error seeding songs:", error);
	} finally {
		mongoose.connection.close();
	}
};

seedSongs();