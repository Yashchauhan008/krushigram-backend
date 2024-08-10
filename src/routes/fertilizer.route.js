const { Router } = require("express");
const { upload } = require("../middlewares/multer.middleware");

const router = Router();

router.route("/").get(getAllFertilizers);
router.route("/:id").get(getFertilizerById);
router.route("/").post(upload.array("propertyImages", 10), addFertilizer);
router.route("/").put(updateFertilizer);
router.route("/").delete(deleteFertilizer);

module.exports = router;
