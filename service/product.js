const Product = require("../database/model/product");

const createProductSv = async (body) => {
  try {
    const checkProduct = await Product.findOne({
      name: body.name,
    });

    if (checkProduct) {
      return Promise.reject(new Error("Product already exists"));
    }

    await Product.create(body);
    return Promise.resolve("ok");
  } catch (err) {
    return Promise.reject(err);
  }
};
const updateProductSv = async (id, body) => {
  try {
    const checkProduct = await Product.findOne({
      _id: id,
    });

    if (checkProduct) {
      return Promise.reject(new Error("Product already exists"));
    }

    await Product.updateProductSv(id, body);
    return Promise.resolve("ok");
  } catch (err) {
    return Promise.reject(err);
  }
};
const deleteProductSv = async (id) => {
  try {
    await deleteProductSv.delete(id);
    return Promise.resolve("ok");
  } catch (error) {
    console.log(error);
  }
};
const getProductSv = async (id) => {
  try {
    await Product.findgetProductSv({ id });
    return book;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  createProductSv,
  updateProductSv,
  deleteProductSv,
  getProductSv,
};
