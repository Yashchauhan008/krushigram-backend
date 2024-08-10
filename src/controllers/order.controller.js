const Order = require("../models/order.model"); // Adjust the path to your Order model
const mongoose = require("mongoose");

// Controller to get all orders
const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find()
      .populate("sellerId", "username") // Adjust based on your User model's fields
      .populate("customerId", "username") // Adjust based on your User model's fields
      .populate("productId", "productName", "productPrice"); // Populates the referenced product details
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller to get an order by ID
const getOrderById = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid order ID" });
  }

  try {
    const order = await Order.findById(id)
      .populate("sellerId", "username") // Adjust based on your User model's fields
      .populate("customerId", "username") // Adjust based on your User model's fields
      .populate("productId"); // Populates the referenced product details
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller to add a new order
const addOrder = async (req, res) => {
  const {
    sellerId,
    customerId,
    productId,
    productType,
    orderQuantity,
    orderPrice,
  } = req.body;

  try {
    const order = new Order({
      sellerId,
      customerId,
      productId,
      productType,
      orderQuantity,
      orderPrice,
    });

    await order.save();
    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller to update an existing order
const updateOrder = async (req, res) => {
  const { id } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid order ID" });
  }

  try {
    const updatedOrder = await Order.findByIdAndUpdate(id, req.body, {
      new: true,
    })
      .populate("sellerId", "username") // Adjust based on your User model's fields
      .populate("customerId", "username") // Adjust based on your User model's fields
      .populate("productId"); // Populates the referenced product details
    if (!updatedOrder) {
      return res.status(404).json({ message: "Order not found" });
    }
    res.status(200).json(updatedOrder);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller to delete an order
const deleteOrder = async (req, res) => {
  const { id } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid order ID" });
  }

  try {
    const deletedOrder = await Order.findByIdAndDelete(id);
    if (!deletedOrder) {
      return res.status(404).json({ message: "Order not found" });
    }
    res.status(200).json({ message: "Order deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllOrders,
  getOrderById,
  addOrder,
  updateOrder,
  deleteOrder,
};
