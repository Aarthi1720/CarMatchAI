import express from "express";
import Car from "../models/Car.js";
import cars from "../data/cars.js";

const router = express.Router();

router.get("/seed", async (req, res) => {
  try {
    await Car.deleteMany();

    const insertedCars = await Car.insertMany(cars);

    res.json(insertedCars);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

router.get("/", async (req, res) => {
  const allCars = await Car.find();

  res.json(allCars);
});

export default router;
