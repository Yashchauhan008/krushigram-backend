const Property = require("../models/property.model"); // Adjust the path to your Property model
const mongoose = require("mongoose");

// Controller to get all properties
const getAllProperties = async (req, res) => {
  try {
    const properties = await Property.find();
    res.status(200).json(properties);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller to get a property by ID
const getPropertyById = async (req, res) => {
  const { id } = req.params;
  
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid property ID" });
  }

  try {
    const property = await Property.findById(id);
    if (!property) {
      return res.status(404).json({ message: "Property not found" });
    }
    res.status(200).json(property);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller to add a new property
const addProperty = async (req, res) => {
  const { propertyArea, propertyAreaUnit, address, propertyPrice, soilType, isFarmable, sellerId } = req.body;

  try {
    const property = new Property({
      propertyArea,
      propertyAreaUnit,
      address,
      propertyPrice,
      soilType,
      isFarmable,
      sellerId,
      images: req.files.map(file => file.path) // Assuming `req.files` contains uploaded images
    });

    await property.save();
    res.status(201).json(property);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller to update a property
const updateProperty = async (req, res) => {
  const { id } = req.body;
  
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid property ID" });
  }

  try {
    const updatedProperty = await Property.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedProperty) {
      return res.status(404).json({ message: "Property not found" });
    }
    res.status(200).json(updatedProperty);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller to delete a property
const deleteProperty = async (req, res) => {
  const { id } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid property ID" });
  }

  try {
    const deletedProperty = await Property.findByIdAndDelete(id);
    if (!deletedProperty) {
      return res.status(404).json({ message: "Property not found" });
    }
    res.status(200).json({ message: "Property deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllProperties,
  getPropertyById,
  addProperty,
  updateProperty,
  deleteProperty,
};
