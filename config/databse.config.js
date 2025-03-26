const mongoose = require("mongoose");
module.exports.connect = async () => {
  try {
    await mongoose.connect(process.env.DATABASE);
    console.log("ket noi thanh cong");
  } catch (error) {
    console.log("ket noi db that bai");
    console.log(error);
  }
};
