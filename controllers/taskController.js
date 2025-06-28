const taskService = require('../services/taskService');

const createTask = async (req, res) => {
  try {
    const task = await taskService.createTask(req.body, req.userId);
    res.status(201).json({ message: 'Task created', task });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const getTasks = async (req, res) => {
  try {
    const tasks = await taskService.getTasksByBoard(req.params.boardId, req.userId);
    res.status(200).json(tasks);
  } catch (err) {
    res.status(403).json({ error: err.message });
  }
};

const updateTask = async (req, res) => {
  try {
    const updated = await taskService.updateTask(req.params.id, req.body, req.userId);
    res.status(200).json({ message: 'Task updated', task: updated });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const deleteTask = async (req, res) => {
  try {
    await taskService.deleteTask(req.params.id, req.body.boardId, req.userId);
    res.status(200).json({ message: 'Task deleted' });
  } catch (err) {
    res.status(403).json({ error: err.message });
  }
};

module.exports = {
  createTask,
  getTasks,
  updateTask,
  deleteTask
};