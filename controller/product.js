const product = require("../service/product");

// const createProductCtl = (req, res) => {
//   createProductSv(req.data)
//     .then(() =>
//       res.json({
//         msg: "ok",
//       })
//     )
//     .catch(() => res.status(400).json({ msg: "err" }));
// };
const createProductCtl = async (req, res) => {
  try {
    const result = await product.createProductSv(req.body);
    return res.status(201).json({ msg: "ok", data: result });
  } catch (error) {
    res.status(400).json({ msg: "err", error });
  }
};
const updateProductCtl = async (req, res) => {
  try {
    const result = await product.updateProductSv(req.params.id, req.body);
    return res
      .status(200)
      .json({ msg: "Update sản phẩm thành công", data: result });
  } catch (error) {
    console.log(error);
    res.status(400).json({ msg: "err", error });
  }
};

const getDetailProductCtl = async (req, res) => {
  try {
    if (!req.params.id) return res.sendStatus(400);
    const result = await product.getProductSv(req.params.id, req.body);
    return res.status(200).json({ msg: "detail" });
  } catch (error) {
    res.status(400).json({ msg: "err" });
  }
};
const getAllProductCtl = async (req, res) => {
  try {
    const result = await product.getAllProductSv();
    return res.status(200).json({ msg: "danh sách sản phẩm", data: result });
  } catch (error) {
    return res.status(404).json({ msg: "Err" });
  }
};

const deleteProductCtl = async (req, res) => {
  try {
    if (!req.params.id) return res.sendStatus(400);
    await product.deleteProductSv(req.params.id);
    return res.status(200).json({ msg: "delete success" });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  createProductCtl,
  updateProductCtl,
  getDetailProductCtl,
  deleteProductCtl,
  getAllProductCtl,
};
