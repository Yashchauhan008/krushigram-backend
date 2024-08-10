const User = require("../models/user.model"); // Ensure this path is correct
const pkg = require("@clerk/clerk-sdk-node");

const clerkClient = pkg.clerkClient;

const signup = async (req, res) => {
  try {
    const { clerkId, username, email } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(200).json("User already exists");
    }

    const createdUser = await User.create({ username, email });

    await clerkClient.users.updateUser(clerkId, {
      externalId: createdUser._id,
    });

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

    if (!address && isSeller === undefined) {
      // Updated check to avoid any issues with falsy values
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

const getUserById = async (req, res) => {
  const { userId } = req.params;

  const user = await User.findById(userId);

  if (!user) {
    res.status(401).json({ message: "Invalid User ID" });
  }

  return res.status(200).json({ message: "User fetched successfully", user });
};

module.exports = { signup, updateUser, getUserById };
