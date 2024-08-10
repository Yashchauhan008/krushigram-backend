const mongoose = require("mongoose");

const fertilizerSchema = new mongoose.Schema(
  {
    fertilizerName: {
      type: String,
      require: true,
      trim: true,
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

const Fertilizer = mongoose.model("Fertilizer", fertilizerSchema);

module.exports = Fertilizer;
