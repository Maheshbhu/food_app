const express = require("express");
const connectDB = require("./DataBase/Db");
const path = require("path");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();
connectDB();

const app = express();

// ✅ Middleware
app.use(express.json());

// ✅ CORS setup (local + production)
const allowedOrigins = [
  "http://localhost:5173", // local frontend (development)
  process.env.FRONTEND_URL, // your live frontend URL (from .env)
];

app.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests with no origin (e.g., mobile apps, curl)
      if (!origin) return callback(null, true);
      if (allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// ✅ Routes
const authRoutes = require("./Routes/authRoutes");
const orderRoutes = require("./Routes/orderRoutes");

app.use("/api/auth", authRoutes);
app.use("/api/orders", orderRoutes);

// ✅ Serve React frontend in production
const __dirname1 = path.resolve();

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname1, "../frontend/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname1, "../frontend", "build", "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("API is running...");
  });
}

// ✅ Server listen
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
