const userRepo = require('../repository/userRepository');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


const register = async ({ name, email, password }) => {
  const existing = await userRepo.findUserByEmail(email);
  if (existing) {
    throw new Error('Email already in use');
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await userRepo.createUser({ name, email, password: hashedPassword });

  return {
    id: user._id,
    name: user.name,
    email: user.email
  };
};


const login = async ({ email, password }) => {
  const user = await userRepo.findUserByEmail(email);
  if (!user) throw new Error('Invalid email or password');

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error('Invalid email or password');

  const token = jwt.sign(
    { id: user._id },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRES_IN || '2d' }
  );

  return {
    token,
    user: {
      id: user._id,
      name: user.name,
      email: user.email
    }
  };
};

module.exports = {
  register,
  login
};