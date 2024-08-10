const { Router } = require("express");
const { upload } = require("../middlewares/multer.middleware");
const fertilizerController = require("../controllers/fertilizer.controller")

const router = Router();

router.route("/").get(fertilizerController.getAllFertilizers);
router.route("/:id").get(fertilizerController.getFertilizerById);
router.route("/").post(upload.array("propertyImages", 10), fertilizerController.addFertilizer);
router.route("/").put(fertilizerController.updateFertilizer);
router.route("/").delete(fertilizerController.deleteFertilizer);

module.exports = router;
