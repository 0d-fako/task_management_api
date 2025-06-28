const Task = require('../models/Task');


const createTask = async (data) => {
  return await Task.create(data);
};


const getTasksByBoard = async (boardId) => {
  return await Task.find({ board: boardId }).sort({ createdAt: -1 });
};


const getTaskById = async (taskId, boardId) => {
  return await Task.findOne({ _id: taskId, board: boardId });
};


const updateTask = async (taskId, updates) => {
  return await Task.findByIdAndUpdate(taskId, updates, { new: true });
};


const deleteTask = async (taskId) => {
  return await Task.findByIdAndDelete(taskId);
};

module.exports = {
  createTask,
  getTasksByBoard,
  getTaskById,
  updateTask,
  deleteTask
};