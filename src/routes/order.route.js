const { Router } = require("express");

const orderController = require("../controllers/order.controller")
const router = Router();

router.route("/").get(orderController.getAllOrders);
router.route("/:id").get(orderController.getOrderById);
router.route("/").post(orderController.addOrder);
router.route("/").put(orderController.updateOrder);
router.route("/").delete(orderController.deleteOrder);

module.exports = router;
