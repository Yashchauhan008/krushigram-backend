const dotenv = require("dotenv").config({
  path: "./.env",
});
const dbConnect = require("./config/dbConnect.js");
const mongoose = require("mongoose");
const { app } = require("./app.js");

const PORT = process.env.PORT || 8000;

dbConnect()
  .then(() => {
    console.log("Connected to mongoDB");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch(() => console.log("Failed to connect to mongoDB"));
