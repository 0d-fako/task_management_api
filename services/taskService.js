const taskRepo = require('../repositories/taskRepository');
const boardRepo = require('../repositories/boardRepository');

const createTask = async (data, userId) => {
  const board = await boardRepo.findBoardById(data.board, userId);
  if (!board) throw new Error('Board not found or unauthorized');

  return await taskRepo.createTask({
    title: data.title,
    description: data.description || '',
    status: data.status || 'todo',
    board: board._id
  });
};


const getTasksByBoard = async (boardId, userId) => {
  const board = await boardRepo.findBoardById(boardId, userId);
  if (!board) throw new Error('Board not found or unauthorized');

  return await taskRepo.getTasksByBoard(boardId);
};


const updateTask = async (taskId, updates, userId) => {
  const task = await taskRepo.getTaskById(taskId, updates.board);
  if (!task) throw new Error('Task not found');

  const board = await boardRepo.findBoardById(task.board, userId);
  if (!board) throw new Error('Unauthorized update');

  return await taskRepo.updateTask(taskId, updates);
};

/**
 * Delete a task (ownership enforced via board)
 */
const deleteTask = async (taskId, boardId, userId) => {
  const board = await boardRepo.findBoardById(boardId, userId);
  if (!board) throw new Error('Unauthorized delete');

  const task = await taskRepo.getTaskById(taskId, boardId);
  if (!task) throw new Error('Task not found');

  return await taskRepo.deleteTask(taskId);
};