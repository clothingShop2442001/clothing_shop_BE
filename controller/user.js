const user = require("../service/user");

const createUserCtl = async (req, res) => {
  try {
    const reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    const isCheckEmail = reg.test(req.body.email);
    if (!isCheckEmail) {
      return res.status(400).json({ msg: "email không đúng định dạng" });
    }
    if (req.body.password !== req.body.confirmpassword) {
      return res
        .status(400)
        .json({ msg: "Mật khẩu của bạn không khớp, vui lòng nhập lại" });
    }
    const result = await user.createUserSv(req.body);
    return res.status(201).json({ msg: "ok", data: result });
  } catch (error) {
    res.status(400).json({ msg: "err", error });
  }
};
const logInUserCtl = async (req, res) => {
  try {
    const reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    const isCheckEmail = reg.test(req.body.username);
    //  check email không đúng định dạng
    if (!isCheckEmail) {
      return res.status(400).json({ msg: "email không đúng định dạng" });
    }

    const result = await user.logInUserCtl(req.body);
    return res.status(201).json({ msg: "ok", data: result });
  } catch (error) {
    res.status(400).json({ msg: "err", error });
  }
};
const updateUserCtl = async (req, res) => {
  try {
    const result = await user.updateUserSv(req.params.id, req.body);
    return res.status(200).json({ msg: "Update successful", data: result });
  } catch (error) {
    res.status(400).json({ msg: "err", error });
  }
};

const getDetailUserCtl = async (req, res) => {
  try {
    if (!req.params.id) return res.sendStatus(400);
    const result = await user.getUserSv(req.params.id, req.body);
    return res.status(200).json({ msg: "ok", data: result });
  } catch (error) {
    res.status(400).json({ msg: "err" });
  }
};
const getAllUserCtl = async (req, res) => {
  try {
    const result = await user.getAllUserSv(req.params.id, req.body);
    return res.status(200).json({ msg: "ok", data: result });
  } catch (error) {
    res.status(400).json({ msg: "err" });
  }
};

const deleteUserCtl = async (req, res) => {
  try {
    if (!req.params.id) return res.sendStatus(400);
    await user.deleteUserSv(req.params.id);
    return res.status(200).json({ msg: "delete success" });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  createUserCtl,
  updateUserCtl,
  getDetailUserCtl,
  getAllUserCtl,
  deleteUserCtl,
  logInUserCtl,
};
