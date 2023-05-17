import mongoose from "mongoose";

// Defining Schema
const songSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  artist: { type: String, required: true, trim: true },
  duration: { type: Number, required: true, trim: true },
  album: { type: String, required: false, default: null },
})

// Model 
const SongModel = mongoose.model("song", songSchema)

export default SongModel