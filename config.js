const config = {
  mongoURL: process.env.MONGO_URL || "mongodb://localhost/pinterest",
  options: { useMongoClient: true },
  port: process.env.PORT || 3001
};

export default config;
