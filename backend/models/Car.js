import mongoose from "mongoose";

const carSchema = new mongoose.Schema(
  {
    name: String,
    brand: String,
    price: Number,
    fuelType: String,
    mileage: Number,
    safety: Number,
    comfort: Number,
    maintenance: Number,
    type: String,
    bestFor: [String],
    pros: [String],
    cons: [String],
    image: String,
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Car", carSchema);