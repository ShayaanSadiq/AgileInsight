require("dotenv").config();
const express = require("express");

const app = express();
const cookieParser = require("cookie-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const authroute = require("./routes/authRoute");
const orgauthroute = require("./routes/orgAuthRoute");
const projectroute = require("./routes/projectRoute");
const taskroute = require("./routes/taskRoute");
const membersroute = require("./routes/projectMemberRoute.js");
const sprintroute = require("./routes/sprintRoute.js");

app.use(
  cors({
    origin: "http://localhost:5173", // frontend URL
    credentials: true,
  }),
);
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

mongoose
  .connect("mongodb://localhost:27017/agileinsight")
  .then(() => {
    console.log("Database connected successfully!");
  })
  .catch((e) => {
    console.log(e);
  });

app.get("/", (req, res) => {
  res.json("Hey there!");
});

app.use("/auth", authroute);
app.use("/org-auth", orgauthroute);
app.use("/project", projectroute);
app.use("/task", taskroute);
app.use("/member", membersroute);
app.use("/sprint", sprintroute);

const port = 8000;

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
