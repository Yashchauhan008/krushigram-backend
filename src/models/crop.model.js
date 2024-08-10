const mongoose = require("mongoose");

const cropSchema = new mongoose.Schema(
  {
    cropName: {
      type: String,
      required: true,
      trim: true,
    },
    cropQuantity: {
      type: Number,
      required: true,
      min: 0,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    fertilizerUsed: {
      fertilizerName: { type: String, required: true },
      quantityUsed: { type: Number, required: true },
      isOrganic: { type: Boolean, default: false },
    },
    harvestingTime: {
      type: Date,
      required: true,
    },
    images: {
      type: [String],
      validate: [arrayLimit, "{PATH} exceeds the limit of 10"],
    },
    cropType: {
      type: String,
      enum: ["Seed", "Harvested"], // Enum to define whether it's a seed or harvested crop
      required: true,
    },
    sellerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Crop = mongoose.model("Crop", cropSchema);

module.exports = Crop;
