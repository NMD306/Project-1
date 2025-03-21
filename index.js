const express = require("express");
const path = require("path");

const app = express();
const port = 3000;

// thiet lap cho phan views
app.set('views', path.join(__dirname, "views"))
app.set('view engine', 'pug')

app.get("/", (req, res) => {
  res.render("client/pages/home",{
    pageTitle: "Trang Chu"
  })
});

app.get("/tours", (req, res) => {
    res.send("client/pages/tour-list", {
        pageTitle: "Danh sach tour"
    });
  });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

