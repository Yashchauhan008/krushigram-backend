const Fertilizer = require("../models/fertilizer.model"); // Adjust the path to your Fertilizer model
const mongoose = require("mongoose");

// Controller to get all fertilizers
const getAllFertilizers = async (req, res) => {
  try {
    const fertilizers = await Fertilizer.find();
    res.status(200).json(fertilizers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller to get a fertilizer by ID
const getFertilizerById = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid fertilizer ID" });
  }

  try {
    const fertilizer = await Fertilizer.findById(id);
    if (!fertilizer) {
      return res.status(404).json({ message: "Fertilizer not found" });
    }
    res.status(200).json(fertilizer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller to add a new fertilizer
const addFertilizer = async (req, res) => {
  const { fertilizerName, quantity, price, sellerId } = req.body;

  try {
    const fertilizer = new Fertilizer({
      fertilizerName,
      quantity,
      price,
      images: req.files.map(file => file.path), // Assuming `req.files` contains uploaded images
      sellerId,
    });

    await fertilizer.save();
    res.status(201).json(fertilizer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller to update an existing fertilizer
const updateFertilizer = async (req, res) => {
  const { id } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid fertilizer ID" });
  }

  try {
    const updatedFertilizer = await Fertilizer.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedFertilizer) {
      return res.status(404).json({ message: "Fertilizer not found" });
    }
    res.status(200).json(updatedFertilizer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller to delete a fertilizer
const deleteFertilizer = async (req, res) => {
  const { id } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid fertilizer ID" });
  }

  try {
    const deletedFertilizer = await Fertilizer.findByIdAndDelete(id);
    if (!deletedFertilizer) {
      return res.status(404).json({ message: "Fertilizer not found" });
    }
    res.status(200).json({ message: "Fertilizer deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllFertilizers,
  getFertilizerById,
  addFertilizer,
  updateFertilizer,
  deleteFertilizer,
};
