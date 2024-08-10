const mongoose = require("mongoose");

const equipmentSchema = new mongoose.Schema(
  {
    equipmentName: {
      type: String,
      require: true,
      trim: true,
    },
    category: {
      type: String,
      enum: ["Tractor", "Plough", "Harvester", "Seeder", "Other"], // Default categories
      default: "Other",
    },
    quantity: {
      type: Number,
      require: true,
      min: 0,
    },
    price: {
      type: Number,
      require: true,
      min: 0,
    },
    equimentUsedTime: {
      type: Number,
      default: 0, // Default to zero if new
    },
    images: {
      type: [String],
      validate: [arrayLimit, "{PATH} exceeds the limit of 10"],
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

const Equipment = mongoose.model("Equipment", equipmentSchema);

module.exports = Equipment;
