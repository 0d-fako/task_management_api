const User = require('../models/User');


const createUser = async (userData) => {
  return await User.create(userData);
};


const findUserByEmail = async (email) => {
  return await User.findOne({ email });
};


const getUserById = async (id) => {
  return await User.findById(id);
};

module.exports = {
    createUser,
    findUserByEmail,
    getUserById
};