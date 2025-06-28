const boardService = require('../services/boardService');

const createBoard = async (req, res) => {
  try {
    const board = await boardService.createBoard(req.body.title, req.userId);
    res.status(201).json({ message: 'Board created', board });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const getBoards = async (req, res) => {
  try {
    const boards = await boardService.getUserBoards(req.userId);
    res.status(200).json(boards);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const deleteBoard = async (req, res) => {
  try {
    await boardService.deleteBoard(req.params.id, req.userId);
    res.status(200).json({ message: 'Board deleted' });
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};

module.exports = {
  createBoard,
  getBoards,
  deleteBoard
};