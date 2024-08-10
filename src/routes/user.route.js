const { Router } = require("express");
const { upload } = require("../middlewares/multer.middleware");

const router = Router();

router.route("/signup").post(signup);
router.route("/update").patch(updateUser);

module.exports = router;
