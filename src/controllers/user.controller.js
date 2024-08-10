// const User = require("../../src/models/user.model");

// const signup = async (req, res) => {
//   try {
//     const { username, email, phoneNumber } = req.body;

//     const createdUser = await User.create({ username, email, phoneNumber });

//     return res.status(200).json({
//       message: "User created successfully",
//       user: createdUser,
//     });
//   } catch (error) {
//     console.log(error);
//     return res.status(500).json("Failed to create user");
//   }
// };
// const updateUser = async (req, res) => {
//   try {
//     const { userId, address, isSeller } = req.body;

//     if (!address || !isSeller) {
//       res.status(401).json({ messge: "No Fields to Update" });
//     }

//     const updatedUser = await User.findByIdAndUpdate(userId, {
//       address,
//       isSeller,
//     });

//     return res
//       .status(200)
//       .json({ message: "Updated user successfully", user: updatedUser });
//   } catch (error) {
//     console.log(error);
//     return res.status(500).json({ message: "Failed to update user" });
//   }
// };

// module.exports = { signup, updateUser };
const User = require("../../src/models/user.model"); // Ensure this path is correct

const signup = async (req, res) => {
  try {
    console.log(req.body.email);
    const { username, email, phoneNumber } = req.body;
    console.log(username);

    const createdUser = await User.create({ username, email, phoneNumber });

    return res.status(200).json({
      message: "User created successfully",
      user: createdUser,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json("Failed to create user");
  }
};

const updateUser = async (req, res) => {
  try {
    const { userId, address, isSeller } = req.body;

    if (!address && isSeller === undefined) {  // Updated check to avoid any issues with falsy values
      return res.status(400).json({ message: "No fields to update" });
    }

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { address, isSeller },
      { new: true } // Return the updated document
    );

    return res
      .status(200)
      .json({ message: "Updated user successfully", user: updatedUser });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Failed to update user" });
  }
};

module.exports = { signup, updateUser };
