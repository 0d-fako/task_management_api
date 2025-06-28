const boardRepo = require('../repository/boardRepository');


const createBoard = async (title, userId) => {
  if (!title) throw new Error('Board title is required');
  return await boardRepo.createBoard(title, userId);
};


const getUserBoards = async (userId) => {
  return await boardRepo.findBoardsByUser(userId);
};


const deleteBoard = async (boardId, userId) => {
  const board = await boardRepo.findBoardById(boardId, userId);
  if (!board) throw new Error('Board not found or unauthorized');
  return await boardRepo.deleteBoard(boardId, userId);
};

module.exports = {
  createBoard,
  getUserBoards,
  deleteBoard
};