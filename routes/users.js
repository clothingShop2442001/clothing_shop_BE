const express = require("express");
const router = express.Router();
const user = require("../controller/user");

router.post("/", user.createUserCtl);
router.put("/:id", user.updateUserCtl);
router.get("/:id", user.getDetailUserCtl);
router.get("/users", user.getAllUserCtl);
router.delete("/:id", user.deleteUserCtl);

module.exports = router;
