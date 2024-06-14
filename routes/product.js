const express = require("express");
const router = express.Router();
const product = require("../controller/product");

router.post("/", product.createProductCtl);
router.put("/:id", product.updateProductCtl);
router.get("/products", product.getAllProductCtl);
router.get("/:id", product.getDetailProductCtl);

router.delete("/:id", product.deleteProductCtl);

module.exports = router;
