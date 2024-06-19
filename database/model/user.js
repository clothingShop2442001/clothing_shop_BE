const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    userName: { type: String, required: true },
    address: { type: String, required: false },

    fullname: { type: String, required: true },
    email: { type: String, required: true },
    phoneNumber: { type: Number, required: true },
    password: { type: String, required: true },
    confirmpassword: { type: String },
    role: { type: String, required: true },
  },

  {
    timestamps: true,
  }
);

module.exports = mongoose.model("user", userSchema);
