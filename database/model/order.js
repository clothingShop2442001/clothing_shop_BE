const mongoose = require("mongoose");
const { Schema } = mongoose;

const orderSchema = new Schema(
  {
    userName: { type: String, required: true },
    phoneNumber: { type: Number, required: true },
    addres: { type: String, required: true },
    totalPrice: { type: Number, required: true },
  },

  {
    timestamps: true,
  }
);

module.exports = mongoose.model("order", orderSchema);
