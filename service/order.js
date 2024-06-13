const Order = require("../database/model/order");

const createOrderSv = async (body) => {
  try {
    const result = await Order.create(body);
    return result;
  } catch (err) {
    console.log(err, "errr ====>");
    return err;
  }
};
const updateOrderSv = async (id, body) => {
  try {
    await Order.findByIdAndUpdate(id, body);
    return Promise.resolve(body);
  } catch (err) {
    return Promise.reject(err);
  }
};
const deleteOrderSv = async (id) => {
  try {
    await Order.findByIdAndDelete({ _id: id });
  } catch (error) {
    console.log(error);
  }
};

const getOrderSv = async (id) => {
  try {
    const result = await Order.findById({ _id: id });
    return result;
  } catch (error) {
    console.log(error);
  }
};

const getAllOrderSv = async () => {
  try {
    const result = await Order.find();
    return result;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  createOrderSv,
  updateOrderSv,
  deleteOrderSv,
  getOrderSv,
  getAllOrderSv,
};
