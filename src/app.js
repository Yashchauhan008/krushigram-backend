const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const app = express();

app.use(cors({ origin: process.env.CORS_ORIGIN, credentials: true }));
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
const cookieParser = require("cookie-parser");

const userRouter = require("./routes/user.route");
const propertyRouter = require("./routes/property.route");
const cropRouter = require("./routes/crop.route");
const fertilizerRouter = require("./routes/fertilizer.route");
const equipmentRouter = require("./routes/equipment.route");

app.use("/user", userRouter);
app.use("/property", propertyRouter);
app.use("/crop", cropRouter);
app.use("/fertilizer", fertilizerRouter);
app.use("/equipment", equipmentRouter);

module.exports = { app };
