const Equipment = require("../models/Equipment.model"); // Adjust the path to your Equipment model
const mongoose = require("mongoose");

// Controller to get all equipment
const getAllEquipments = async (req, res) => {
  try {
    const equipments = await Equipment.find().populate("sellerId");
    res.status(200).json(equipments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller to get equipment by ID
const getEquipmentById = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid equipment ID" });
  }

  try {
    const equipment = await Equipment.findById(id).populate("sellerId");
    if (!equipment) {
      return res.status(404).json({ message: "Equipment not found" });
    }
    res.status(200).json(equipment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller to add new equipment
const addEquipment = async (req, res) => {
  const {
    equipmentName,
    category,
    quantity,
    price,
    equimentUsedTime,
    sellerId,
  } = req.body;

  try {
    const equipment = new Equipment({
      equipmentName,
      category,
      quantity,
      price,
      equimentUsedTime,
      images: req.files.map((file) => file.path), // Assuming `req.files` contains uploaded images
      sellerId,
    });

    await equipment.save();
    res.status(201).json(equipment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller to update equipment
const updateEquipment = async (req, res) => {
  const { id } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid equipment ID" });
  }

  try {
    const updatedEquipment = await Equipment.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedEquipment) {
      return res.status(404).json({ message: "Equipment not found" });
    }
    res.status(200).json(updatedEquipment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller to delete equipment
const deleteEquipment = async (req, res) => {
  const { id } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid equipment ID" });
  }

  try {
    const deletedEquipment = await Equipment.findByIdAndDelete(id);
    if (!deletedEquipment) {
      return res.status(404).json({ message: "Equipment not found" });
    }
    res.status(200).json({ message: "Equipment deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllEquipments,
  getEquipmentById,
  addEquipment,
  updateEquipment,
  deleteEquipment,
};
