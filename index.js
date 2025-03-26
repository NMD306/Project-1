const express = require("express");

require("dotenv").config();
const database = require("./config/database.config");
const path = require("path");
const clientRoutes = require("./routes/client/index.route");

const app = express();
const port = 3000;

// thiet lap cho phan views
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

// ket noi databse
database.connect();

// thiet lap duong dan
app.use("/", clientRoutes);

// thiet lap cho static files for FE
app.use(express.static(path.join(__dirname, "public")));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
