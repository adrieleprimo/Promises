const express = require('express');
const router = express.Router();
const tasksController = require('./controllers/tasksControllers');

router.get('/tasks', tasksController.getAll);


module.exports = router;

