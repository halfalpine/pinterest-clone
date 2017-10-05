import express from "express";
// import { Router as router } from "express";
const app = express();
import mongoose from "mongoose";
import bodyParser from "body-parser";

import config from "./config";
import router from "./server/routes/index";

mongoose.connect(config.mongoURL, config.options);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => console.log("connected to database"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", router);

app.listen(config.port, () =>
  console.log(`server is running on ${config.port}`)
);
