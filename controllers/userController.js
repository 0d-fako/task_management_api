const userService = require('../services/userService');

const register = async (req, res) => {
  try {
    const user = await userService.register(req.body);
    res.status(201).json({ message: 'User registered successfully', user });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const login = async (req, res) => {
  try {
    const result = await userService.login(req.body);
    res.status(200).json({ message: 'Login successful', ...result });
  } catch (err) {
    res.status(401).json({ error: err.message });
  }
};

module.exports = {
  register,
  login
};