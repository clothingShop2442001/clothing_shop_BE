const product = require("../database/model/product");

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
    await product.createProductSv(req.body);
    res.json({
      msg: "ok",
    });
  } catch (error) {
    res.status(400).json({ msg: "err" });
  }
};
const updateProductCtl = async (req, res) => {
  try {
    if (!req.params.id) return res.sendStatus(400);
    await product.updateProductSv(req.params.id, req.body);
    res.json({
      msg: "update thành công",
    });
  } catch (error) {
    res.status(400).json({ msg: "err" });
  }
};

const getDetailProductCtl = async (req, res) => {
  try {
    if (!req.params.id) return res.sendStatus(400);
    await product.getDetailProductCtl(req.params.id, req.body);
    return res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ msg: "err" });
  }
};
const deleteProductCtl = async (req, res) => {
  try {
    if (!req.params.id) return res.sendStatus(400);
    await product.deleteBook(req.params.id);
    if (!deleteProductCtl) return res.sendStatus(500);
    return res.status(200).send("deletebook successful!!!!!");
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  createProductCtl,
  updateProductCtl,
  getDetailProductCtl,
  deleteProductCtl,
};
