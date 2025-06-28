const express = require('express');
const router = express.Router();
const boardController = require('../controllers/boardController');
const verifyToken = require('../middlewares/authMiddleware');

router.use(verifyToken);

router.post('/', boardController.createBoard);
router.get('/', boardController.getBoards);
router.delete('/:id', boardController.deleteBoard);

module.exports = router;