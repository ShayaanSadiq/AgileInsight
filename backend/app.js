const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const orgAuthroute = require("./routes/organisation/authRoute.js");
const managerAuthroute = require("./routes/manager/authRoute.js");
const userAuthroute = require("./routes/user/authRoute.js");

const app = express();

app.use(express.json());
app.use(cors());
app.use(cookieParser());

mongoose
  .connect("mongodb://localhost:27017/agileinsight")
  .then(() => {
    console.log("Connected to DB successfully.");
  })
  .catch((error) => {
    console.log(error);
  });

app.use("/api/organisation", orgAuthroute);
app.use("/api/manager", managerAuthroute);
app.use("/api/user", userAuthroute);

const PORT = 5000;

app.listen(PORT, () => {
  console.log("Listening from backend.");
});
