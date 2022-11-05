const whitelist = ["https://lendor.vercel.app", "http://localhost:3000","http://localhost:443"];
const corsOptions = {
  origin: (origin, callback) => {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Cannot be accessed by another source."));
    }
  },
  methods: ["GET", "PUT", "POST", "PATCH", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization", "x-csrf-token"],
  credentials: true,
  exposedHeaders: ["*", "Authorization"]
};

module.exports = corsOptions;