const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
mongoose.connect(process.env.DATABASE);
const path = require("path");

const tourController = require("./controllers/client/tour.controller");
const homeController = require("./controllers/client/home.controller");

const app = express();
const port = 3000;

// thiet lap cho phan views
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

// thiet lap cho static files for FE
app.use(express.static(path.join(__dirname, "public")));

app.get("/", homeController.home);

app.get("/tours", tourController.list);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
