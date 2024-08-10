const { Router } = require("express");

const router = Router();

router.route("/").get(getAllOrders);
router.route("/:id").get(getOrderById);
router.route("/").post(addOrder);
router.route("/").put(updateOrder);
router.route("/").delete(deleteOrder);

module.exports = router;
