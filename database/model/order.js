const mongoose = require("mongoose");
const { Schema } = mongoose;

const orderSchema = new Schema(
  {
    productId: { type: String, required: true },
    productName: { type: String, required: true },
    productPrice: { type: Number, required: true },
    productQuantity: { type: Number, required: true },
    addressShipping: { type: String, required: true },
    statusPayment: { type: String, required: false },
  },

  {
    timestamps: true,
  }
);

module.exports = mongoose.model("order", orderSchema);
