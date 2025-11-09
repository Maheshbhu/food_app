const express = require("express");
const connectDB = require("./DataBase/Db");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();
connectDB();

const app = express();

// ✅ Middleware
app.use(express.json());

// ✅ CORS setup
const allowedOrigins = [
  "http://localhost:5173", // local frontend
  "https://food-app-eight-puce.vercel.app", // your deployed frontend (Vercel)
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true); // allow tools like Postman
      if (allowedOrigins.includes(origin)) return callback(null, true);
      callback(new Error("Not allowed by CORS"));
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

// ✅ Test route to check backend status
app.get("/test", (req, res) => {
  res.send("Backend is running!");
});

// ✅ Root route (optional)
app.get("/", (req, res) => {
  res.send("API is running...");
});

// ✅ Start server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
