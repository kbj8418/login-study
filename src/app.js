"use strict";

const express = require("express");
const app = express();
const port = 3000;

//앱 세팅
app.set("views", "./views");
app.set("view engine", "ejs"); // ejs - view engine

/*
app.get("/", (req, res) => {
    res.render("home/index");
});
   
app.get("/login", (req, res) => {
    res.render("home/login");
});
*/

const home = require("./routes/home");
app.use("/", home); /// use - 미들웨어 등록해주는 메서드.

module.exports = app;

// package.json 설치필요 - npm init
