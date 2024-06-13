const order = require("../service/order");

const createOrderCtl = async (req, res) => {
  try {
    const result = await order.createOrderSv(req.body);
    return res.status(201).json({ msg: "ok", data: result });
  } catch (error) {
    res.status(400).json({ msg: "err", error });
  }
};
const updateOrderCtl = async (req, res) => {
  try {
    const result = await order.updateOrderSv(req.params.id, req.body);
    return res
      .status(200)
      .json({ msg: "Update sản phẩm thành công", data: result });
  } catch (error) {
    res.status(400).json({ msg: "err", error });
  }
};

const getDetailOrderCtl = async (req, res) => {
  try {
    if (!req.params.id) return res.sendStatus(400);
    const result = await order.getOrderSv(req.params.id, req.body);
    return res.status(200).json({ msg: "ok", data: result });
  } catch (error) {
    res.status(400).json({ msg: "err" });
  }
};
const getAllOrderCtl = async (req, res) => {
  try {
    const result = await order.getAllOrderSv();
    return res.status(200).json({ data: result });
  } catch (error) {
    return res.status(404).json({ msg: "err" });
  }
};

const deleteOrderCtl = async (req, res) => {
  try {
    if (!req.params.id) return res.sendStatus(400);
    await order.deleteOrderSv(req.params.id);
    return res.status(200).json({ msg: "delete success" });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  createOrderCtl,
  updateOrderCtl,
  getDetailOrderCtl,
  getAllOrderCtl,
  deleteOrderCtl,
};
