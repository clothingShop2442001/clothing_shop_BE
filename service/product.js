const Product = require("../database/model/product");

const createProductSv = async (body) => {
  try {
    const result = await Product.create(body);
    return result;
  } catch (err) {
    console.log(err, "errr ====>");
    return err;
  }
};
const updateProductSv = async (id, body) => {
  try {
    await Product.findByIdAndUpdate(id, body);
    return Promise.resolve(body);
  } catch (err) {
    return Promise.reject(err);
  }
};
const deleteProductSv = async (id) => {
  try {
    await Product.findByIdAndDelete({ _id: id });
  } catch (error) {
    console.log(error);
  }
};

const getProductSv = async (id) => {
  try {
    const result = await Product.findById({ _id: id });
    return result;
  } catch (error) {
    console.log(error);
  }
};

const getAllProductSv = async () => {
  try {
    const result = await Product.find();
    return result;
  } catch (error) {}
};

module.exports = {
  createProductSv,
  updateProductSv,
  deleteProductSv,
  getProductSv,
  getAllProductSv,
};
