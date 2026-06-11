import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import carRoutes from "./routes/carRoutes.js";
import recommendRoutes from "./routes/recommendRoutes.js";

dotenv.config();

const app = express();

connectDB();

//middleware
app.use(cors());
app.use(express.json());

//routes
app.use("/api/cars", carRoutes);
app.use("/api/recommend", recommendRoutes);

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "CarMatch AI Backend Running",
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});