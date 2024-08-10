const { Router } = require("express");
const { upload } = require("../middlewares/multer.middleware");
const equipmentController = require("../controllers/equipment.controller")

const router = Router();

router.route("/").get(equipmentController.getAllEquipments);
router.route("/:id").get(equipmentController.getEquipmentById);
router.route("/").post(upload.array("propertyImages", 10), equipmentController.addEquipment);
router.route("/").put(equipmentController.updateEquipment);
router.route("/").delete(equipmentController.deleteEquipment);

module.exports = router;
