const { compare, compareSync } = require("bcrypt");
const User = require("../database/model/user");
const { genneralAccessToken } = require("./jwtService");
const { genneralRefreshToken } = require("./jwtService");
const { log } = require("winston");
// import bcrypt from "bcryptjs";

const createUserSv = async (body) => {
  try {
    const result = await User.create(body);
    return result;
  } catch (err) {
    return err;
  }
};
const logInUserCtl = (userLogin) => {
  return new Promise(async (resolve, reject) => {
    const { fullname, email, phoneNumber, password, confirmpassword } =
      userLogin;
    try {
      const checkUser = await User.findOne({
        email: email,
      });
      if (checkUser === null) {
        resolve({ msg: "Bạn chưa đăng kí" });
      }

      const comparePassword = compare(password, checkUser.password);
      if (!comparePassword) {
        return resolve({ msg: "Sai email hoặc mật khẩu " });
      }
      const access_token = await genneralAccessToken({
        _id: checkUser.id,
        isAdmin: checkUser.isAdmin,
      });

      const refresh_token = await genneralRefreshToken({
        _id: checkUser.id,
        isAdmin: checkUser.isAdmin,
      });

      return resolve({
        access_token: access_token,
        refresh_token: refresh_token,
      });
    } catch (error) {}
  });
};

const updateUserSv = async (id, body) => {
  try {
    await User.findByIdAndUpdate(id, body);
    return Promise.resolve(body);
  } catch (err) {
    return Promise.reject(err);
  }
};
const deleteUserSv = async (id) => {
  try {
    await User.findByIdAndDelete({ _id: id });
  } catch (error) {
    console.log(error);
  }
};

const getUserSv = async (id) => {
  try {
    const result = await User.findById({ _id: id });
    return result;
  } catch (error) {
    console.log(error);
  }
};

const getAllUserSv = async (body) => {
  try {
    const result = await User.find();
    return result;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  createUserSv,
  updateUserSv,
  deleteUserSv,
  getUserSv,
  getAllUserSv,
  logInUserCtl,
};
