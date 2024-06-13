const express = require("express");
const router = express.Router();
const product = require("../controller/product");

router.post("/", product.createProductCtl);
router.put("/:id", product.updateProductCtl);
router.get("/:id", product.getDetailProductCtl);
router.get("/products", product.getAllProductCtl);
router.delete("/:id", product.deleteProductCtl);

// router.get("/about", function (req, res) {
//   res.send("About this wiki");
//   res.status(400).json({ msg: "err" });
// });

module.exports = router;
