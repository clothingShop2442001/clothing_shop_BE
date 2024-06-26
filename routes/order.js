const express = require("express");
const router = express.Router();
const order = require("../controller/order");

router.post("/", order.createOrderCtl);
router.put("/:id", order.updateOrderCtl);
router.get("/orders", order.getAllOrderCtl);
router.get("/:id", order.getDetailOrderCtl);

router.delete("/:id", order.deleteOrderCtl);

module.exports = router;
