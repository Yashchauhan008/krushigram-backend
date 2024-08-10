const { Router } = require("express");
const { signup, updateUser } = require("../controllers/user.controller");

const router = Router();

router.route("/signup").post(signup);
router.route("/update").patch(updateUser);

module.exports = router;
