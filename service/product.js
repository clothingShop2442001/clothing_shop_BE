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
    // const checkProduct = await Product.findOne({
    //   _id: id,
    // });

    // if (checkProduct) {
    //   return Promise.reject(new Error("Product already exists"));
    // }

    await Product.findByIdAndUpdate(id, body);
    return Promise.resolve("ok");
  } catch (err) {
    return Promise.reject(err);
  }
};
const deleteProductSv = async (id) => {
  try {
    await Product.delete({ _id: id });
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

const getAllProductSv = async (body) => {
  try {
    const result = await Product.find();
    return result;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  createProductSv,
  updateProductSv,
  deleteProductSv,
  getProductSv,
  getAllProductSv,
};
