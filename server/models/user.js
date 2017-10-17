import mongoose, { Schema } from "mongoose";

export default mongoose.model(
  "User",
  new Schema({
    username: String,
    password: String,
    email: String,
    boards: [
      {
        board: {
          name: String,
          pins: [{ type: Schema.Types.ObjectId, ref: "Pin" }]
        }
      }
    ],
    followers: [{ type: String }],
    following: [{ type: String }]
  })
);
