const express = require("express")

const app = express();

const user = {
    username: "username",
    password: "password"
};

app.post("/login", (req, res) => {
    const { username, password} = req.body;


});