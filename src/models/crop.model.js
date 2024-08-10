const mongoose = require("mongoose");

const cropSchema = new mongoose.Schema(
  {
    cropName: {
      type: String,
      require: true,
      trim: true,
    },
    cropQuantity: {
      type: Number,
      require: true,
      min: 0,
    },
    price: {
      type: Number,
      require: true,
      min: 0,
    },
    fertilizerUsed: {
      fertilizerName: { type: String, require: true },
      quantityUsed: { type: Number, require: true },
      isOrganic: { type: Boolean, default: false },
    },
    harvestingTime: {
      type: Date,
      require: true,
    },
    images: {
      type: [String],
      validate: [arrayLimit, "{PATH} exceeds the limit of 10"],
    },
    cropType: {
      type: String,
      enum: ["Seed", "Harvested"], // Enum to define whether it's a seed or harvested crop
      require: true,
    },
    sellerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

function arrayLimit(val) {
  return val.length <= 10;
}

const Crop = mongoose.model("Crop", cropSchema);

module.exports = Crop;
