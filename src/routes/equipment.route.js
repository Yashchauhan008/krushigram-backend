const { Router } = require("express");
const { upload } = require("../middlewares/multer.middleware");

const router = Router();

router.route("/").get(getAllEquipments);
router.route("/:id").get(getEquipmentById);
router.route("/").post(upload.array("propertyImages", 10), addEquipment);
router.route("/").put(updateEquipment);
router.route("/").delete(deleteEuipment);

module.exports = router;
