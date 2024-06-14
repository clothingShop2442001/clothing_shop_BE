const User = require("../database/model/user");

const createUserSv = async (body) => {
  try {
    const result = await User.create(body);
    return result;
  } catch (err) {
    return err;
  }
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
};
