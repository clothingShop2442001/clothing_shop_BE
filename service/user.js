const { compare, compareSync } = require("bcrypt");
const User = require("../database/model/user");
const { genneralAccessToken } = require("./jwtService");
const { genneralRefreshToken } = require("./jwtService");
const { log } = require("winston");
// import bcrypt from "bcryptjs";

const createUserSv = async (body) => {
  try {
    const { userName, fullname, email, phoneNumber, password, address } = body;
    const payload = {
      userName,
      fullname,
      email,
      phoneNumber,
      password,
      address,
      role: "User",
    };
    const result = await User.create(payload);
    return result;
  } catch (err) {
    return err;
  }
};

const logInUserCtl = (userLogin) => {
  return new Promise(async (resolve, reject) => {
    const {
      fullname,
      username,
      phoneNumber,
      password,
      confirmpassword,
      email,
    } = userLogin;
    try {
      const checkUser = await User.findOne({
        email: username,
      });
      if (checkUser === null) {
        resolve({ msg: "Bạn chưa đăng kí" });
      }

      if (password !== checkUser.password) {
        return resolve({ msg: "Sai email hoặc mật khẩu" });
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
        userId: checkUser._id,
        role: checkUser.role,
        fullName: checkUser.fullname,
        email: checkUser.email,
        phoneNumber: checkUser.phoneNumber,
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
