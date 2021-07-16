const router = require('express').Router();

const { verifyToken } = require('../middleware/authentication');
const { newTasksPost, getAllTask, deleteToDo } = require('../controllers/taksController')

router.post('/newTask', verifyToken, newTasksPost);

router.get('/getAllTaskByUser', verifyToken, getAllTask)

router.delete('/deleteTaks/:_id', verifyToken, deleteToDo)

module.exports = router;