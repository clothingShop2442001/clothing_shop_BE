const express = require("express");
const router = express.Router();
const product = require("../controller/product");

router.post("/create", product.createProductCtl);
router.put("/update/:id", product.updateProductCtl);
router.get("/details/:id", product.getDetailProductCtl);
router.delete("/delete/:id", product.deleteProductCtl);

// router.get("/about", function (req, res) {
//   res.send("About this wiki");
//   res.status(400).json({ msg: "err" });
// });

module.exports = router;
