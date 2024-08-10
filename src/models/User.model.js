// const mongoose = require("mongoose");

// const userSchema = new mongoose.Schema(
//   {
//     username: {
//       type: String,
//       required: true,
//       trim: true,
//     },
//     email: {
//       type: String,
//       required: true,
//       unique: true,
//       trim: true,
//       lowercase: true,
//     },
//     phoneNumber: {
//       type: String,
//       required: true,
//       unique: true,
//       trim: true,
//     },
//     address: {
//       street: { type: String },
//       city: { type: String },
//       state: { type: String },
//       pinCode: { type: String },
//     },
//     isSeller: {
//       type: Boolean,
//       default: false,
//     },
//   },
//   {
//     timestamps: true, // Automatically adds `createdAt` and `updatedAt` fields
//   }
// );


// const User = mongoose.model("User", userSchema);

// module.exports = User;

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    phoneNumber: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    address: {
      street: { type: String },
      city: { type: String },
      state: { type: String },
      pinCode: { type: String },
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
