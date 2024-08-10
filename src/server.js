require("dotenv").config({
  path: "./.env",
});

const mongoose = require("mongoose");
const { app } = require("./app.js");

const PORT = process.env.PORT || 8000;

mongoose.connection.once("open", () => {
  console.log("Connected to mongoDB");
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
