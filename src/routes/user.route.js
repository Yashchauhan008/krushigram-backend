const { Router } = require("express");
const {
  signup,
  updateUser,
  getUserById,
} = require("../controllers/user.controller");

const router = Router();

router.route("/signup").post(signup);
router.route("/update").patch(updateUser);
router.route("/:userId").get(getUserById);

module.exports = router;
