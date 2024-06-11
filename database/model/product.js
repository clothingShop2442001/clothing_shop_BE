const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema(
  {
    name: String,
    price: { type: Number, required: true, unique: true },
    description: { type: String, require: true },
    image: { type: String, required: true },
    stock: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("product", productSchema);
