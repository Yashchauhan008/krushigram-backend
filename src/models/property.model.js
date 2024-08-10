const mongoose = require("mongoose");

const propertySchema = new mongoose.Schema(
  {
    propertyArea: {
      type: Number,
      required: true,
      trim: true,
    },
    propertyAreaUnit: {
      type: String,
      default: "Acres",
    },
    address: {
      street: { type: String, required: true },
      city: { type: String, required: true },
      state: { type: String, required: true },
      pinCode: { type: String, required: true },
    },
    propertyPrice: {
      type: Number,
      required: true,
      min: 0,
    },
    soilType: {
      type: String,
      required: true,
      trim: true,
    },
    isFarmable: {
      type: Boolean,
      default: true,
    },
    images: {
      type: [String], // Array of strings containing image paths
      validate: [arrayLimit, "{PATH} exceeds the limit of 10"], // Optional limit on images
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

function arrayLimit(val) {
  return val.length <= 10;
}

const Property = mongoose.model("Property", propertySchema);

module.exports = Property;
