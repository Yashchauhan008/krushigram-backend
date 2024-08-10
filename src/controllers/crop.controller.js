const Crop = require("../models/crop.model"); // Adjust the path to your Crop model
const mongoose = require("mongoose");

// Controller to get all crops
const getAllCrops = async (req, res) => {
  try {
    const crops = await Crop.find().populate("sellerId");
    res.status(200).json(crops);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller to get a crop by ID
const getCropById = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid crop ID" });
  }

  try {
    const crop = await Crop.findById(id).populate("sellerId");
    if (!crop) {
      return res.status(404).json({ message: "Crop not found" });
    }
    res.status(200).json(crop);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller to add a new crop
const addCrop = async (req, res) => {
  const {
    cropName,
    cropQuantity,
    price,
    fertilizerUsed,
    harvestingTime,
    cropType,
    sellerId,
  } = req.body;

  try {
    const crop = new Crop({
      cropName,
      cropQuantity,
      price,
      fertilizerUsed,
      harvestingTime,
      images: req.files.map((file) => file.path), // Assuming `req.files` contains uploaded images
      cropType,
      sellerId,
    });

    await crop.save();
    res.status(201).json(crop);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller to update a crop
const updateCrop = async (req, res) => {
  const { id } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid crop ID" });
  }

  try {
    const updatedCrop = await Crop.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedCrop) {
      return res.status(404).json({ message: "Crop not found" });
    }
    res.status(200).json(updatedCrop);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller to delete a crop
const deleteCrop = async (req, res) => {
  const { id } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid crop ID" });
  }

  try {
    const deletedCrop = await Crop.findByIdAndDelete(id);
    if (!deletedCrop) {
      return res.status(404).json({ message: "Crop not found" });
    }
    res.status(200).json({ message: "Crop deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllCrops,
  getCropById,
  addCrop,
  updateCrop,
  deleteCrop,
};
