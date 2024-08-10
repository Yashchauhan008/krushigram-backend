const { Router } = require("express");
const { upload } = require("../middlewares/multer.middleware");
const cropController = require("../controllers/crop.controller")

const router = Router();

router.route("/").get(cropController.getAllCrops);
router.route("/:id").get(cropController.getCropById);
router.route("/").post(upload.array("propertyImages", 10), cropController.addCrop);
router.route("/").put(cropController.updateCrop);
router.route("/").delete(cropController.deleteCrop);

module.exports = router;
