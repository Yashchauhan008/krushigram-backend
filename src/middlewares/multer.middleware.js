<<<<<<< HEAD
const multer=require('multer');
=======
const multer = require("multer");
>>>>>>> b6b4c07b8af6f94a7212f1d32b067aff07741d57

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/temp");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

module.exports.upload = multer({
  storage,
});
