const { Router } = require("express");
const { upload } = require("../middlewares/multer.middleware");

const router = Router();

router.route("/").get(getAllCrops);
router.route("/:id").get(getCropById);
router.route("/").post(upload.array("propertyImages", 10), addCrop);
router.route("/").put(updateCrop);
router.route("/").delete(deleteCrop);

module.exports = router;
