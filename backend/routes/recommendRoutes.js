import express from "express";
import Car from "../models/Car.js";
import { getRecommendations } from "../utils/recommendationEngine.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { query } = req.body;

    if (!query) {
      return res.status(400).json({
        message: "Query is required",
      });
    }

    const cars = await Car.find();

    const result = getRecommendations(cars, query);

    res.json(result);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

export default router;
