const mongoose = require("mongoose");
const { Schema } = mongoose;

const orderSchema = new Schema(
  {
    productName: { type: String, required: true },
    productPrice: { type: Number, required: true },
    productQuantity: { type: Number, required: true },
    addressShipping: { type: String, required: true },
    statusPayment: { type: Boolean, required: false },
  },

  {
    timestamps: true,
  }
);

module.exports = mongoose.model("order", orderSchema);
