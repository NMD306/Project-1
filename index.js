const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
mongoose.connect(process.env.DATABASE);
const path = require("path");

const Tour = require("./models/tour.model")

const app = express();
const port = 3000;

// thiet lap cho phan views
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

// thiet lap cho static files for FE
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("client/pages/home", {
    pageTitle: "Trang Chu",
  });
});

app.get("/tours", async (req, res) => {
  const tourList = await Tour.find();

  res.render("client/pages/tour-list", {
    pageTitle: "Danh sach tour",
    tourList: tourList,
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
