const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
mongoose.connect(process.env.DATABASE);
const path = require("path");



const app = express();
const port = 3000;

// thiet lap cho phan views
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

// thiet lap cho static files for FE
app.use(express.static(path.join(__dirname, "public")));





app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
