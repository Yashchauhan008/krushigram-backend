const { Router } = require("express");
const { upload } = require("../middlewares/multer.middleware");

const router = Router();

router.route("/").get(getAllProperties);
router.route("/:id").get(getPropertyById);
router.route("/").post(upload.array("propertyImages", 10), addProperty);
router.route("/").put(updateProperty);
router.route("/").delete(deleteProperty);

module.exports = router;
