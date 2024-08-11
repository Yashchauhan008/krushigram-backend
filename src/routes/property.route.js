const { Router } = require("express");
const { upload } = require("../middlewares/multer.middleware");
const propertyControllers = require("../controllers/property.controller");

const router = Router();

router.route("/").get(propertyControllers.getAllProperties);
router.route("/:id").get(propertyControllers.getPropertyById);
router
  .route("/")
  .post(upload.array("propertyImages", 10), propertyControllers.addProperty);
router.route("/:id").put(propertyControllers.updateProperty);
router.route("/").delete(propertyControllers.deleteProperty);

module.exports = router;
