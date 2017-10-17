import mongoose, { Schema } from "mongoose";

export default mongoose.model(
  "Pin",
  new Schema({
    _pid: { type: Number, ref: "User" },
    url: String,
    image: String
  })
);
