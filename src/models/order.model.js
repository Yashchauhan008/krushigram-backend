const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    sellerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      require: true,
    },
    customerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      require: true,
    },
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      refPath: "productType", // Dynamic reference to the model of the product
    },
    productType: {
      type: String,
      require: true,
      enum: ["Property", "Crop", "Fertilizer", "Equipment"], // The type of product ordered
    },
    orderQuantity: {
      type: Number,
      require: true,
      min: 1,
    },
    orderPrice: {
      type: Number,
      require: true,
      min: 0,
    },
    isAccepted: {
      type: Boolean,
      default: false,
    },
    isCompleted: {
      type: Boolean,
      default: false,
    },
    orderDate: {
      type: Date,
      default: Date.now(),
    },
  },
  {
    timestamps: true,
  }
);

function arrayLimit(val) {
  return val.length <= 10;
}

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
