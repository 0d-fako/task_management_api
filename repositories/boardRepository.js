const Board = require('../models/Board');


const createBoard = async (title, userId) => {
  return await Board.create({ title, user: userId });
};


const getBoardsByUser = async (userId) => {
  return await Board.find({ user: userId }).sort({ createdAt: -1 });
};


const getBoardById = async (boardId, userId) => {
  return await Board.findOne({ _id: boardId, user: userId });
};


const deleteBoard = async (boardId, userId) => {
  return await Board.findOneAndDelete({ _id: boardId, user: userId });
};

module.exports = {
  createBoard,
  getBoardsByUser,
  getBoardById,
  deleteBoard
};