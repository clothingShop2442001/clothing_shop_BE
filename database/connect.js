const mongoose = require("mongoose");

async function run() {
  try {
    mongoose
      .connect("mongodb://localhost:27017")
      .then(() => console.log("connected to DB."))
      .catch((err) => console.log(err));
  } catch (er) {
    console.log("errrr ===>", er);
  }
}
module.exports = run;
