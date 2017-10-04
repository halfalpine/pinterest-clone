const config = {
  mongoURL: process.env.MONGO_URL || "mongodb://localhost/pinterest",
  port: process.env.PORT || 3001
};

export default config;
