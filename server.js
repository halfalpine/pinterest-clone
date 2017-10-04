import express from "express";
const app = express();

import config from "./config";

app.listen(config.port, () =>
  console.log(`server is running on ${config.port}`)
);
