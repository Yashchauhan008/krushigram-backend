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
    },
    address: {
      type: String,
      trim: true,
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
