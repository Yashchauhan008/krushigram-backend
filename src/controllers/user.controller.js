const User = require("../models/user.model");

const signup = async (req, res) => {
  try {
    const { username, email, phoneNumber } = req.body;

    if (!username || !email || !phoneNumber) {
      return res
        .status(401)
        .json({ message: "Username, Email and PhoneNumber is required" });
    }

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

    if (!address || !isSeller) {
      res.status(401).json({ messge: "No Fields to Update" });
    }

    const updatedUser = await User.findByIdAndUpdate(userId, {
      address,
      isSeller,
    });

    return res
      .status(200)
      .json({ message: "Updated user successfully", user: updatedUser });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Failed to update user" });
  }
};

module.exports = { signup, updateUser };
