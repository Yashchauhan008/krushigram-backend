const mongoose = require("mongoose");

const propertySchema = new mongoose.Schema(
  {
    propertyArea: {
      type: Number,
      require: true,
      trim: true,
    },
    propertyAreaUnit: {
      type: String,
      default: "Acres",
    },
    address: {
      street: { type: String, require: true },
      city: { type: String, require: true },
      state: { type: String, require: true },
      pinCode: { type: String, require: true },
    },
    propertyPrice: {
      type: Number,
      required: true,
      min: 0,
    },
    soilType: {
      type: String,
      require: true,
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

const Property = mongoose.model("Property", propertySchema);

module.exports = Property;
