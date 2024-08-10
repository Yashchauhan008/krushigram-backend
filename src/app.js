const express = require("express");
const cors = require("cors");
const connectDB = require("./config/dbConnect");

const app = express();

app.use(cors({ origin: process.env.CORS_ORIGIN, credentials: true }));
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));

const userRouter = require("./routes/user.route");
const propertyRouter = require("./routes/property.route");
const cropRouter = require("./routes/crop.route");
const fertilizerRouter = require("./routes/fertilizer.route");
const equipmentRouter = require("./routes/equipment.route");
const orderRouter = require("./routes/order.route");

app.use("/user", userRouter);
app.use("/property", propertyRouter);
app.use("/crop", cropRouter);
app.use("/fertilizer", fertilizerRouter);
app.use("/equipment", equipmentRouter);
app.use("/order", orderRouter);

app.get("/",(req,res)=>{
    res.send("heelo from krushigram of crew ventures")
})

module.exports = { app };
