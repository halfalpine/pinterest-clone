import express from "express";
const app = express();
import mongoose from "mongoose";

import config from "./config";

mongoose.connect(config.mongoURL, config.options);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => console.log("connected to database"));

app.listen(config.port, () =>
  console.log(`server is running on ${config.port}`)
);
