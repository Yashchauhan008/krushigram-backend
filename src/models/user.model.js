const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      unique: true,
      trim: true,
      require: true,
    },
    email: {
      type: String,
      unique: true,
      trim: true,
      lowercase: true,
      require: true,
    },
    phoneNumber: {
      type: String,
      unique: true,
      trim: true,
      require: true,
    },
    address: {
      street: { type: String, require: true },
      city: { type: String, require: true },
      state: { type: String, require: true },
      pinCode: { type: String, require: true },
    },
    isSeller: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true, // Automatically adds `createdAt` and `updatedAt` fields
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
