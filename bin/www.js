"use strict";

const app = require("../app");
const port = 3000;

// ./bin/www.js 를 실행시켜야 함.
app.listen(port, () => {
    console.log("서버 가동")
});