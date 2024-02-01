const express = require('express');
const router = express.Router();

const promisesMiddleware = require('./middlewares/promisesMiddleware');
const getAllPromises = require('./controllers/allPromises');
const createPromise = require('./controllers/createPromise');
const deletePromise = require('./controllers/deletePromise');
const updatePromise = require('./controllers/updatePromise');

router.get('/promises', getAllPromises);
router.post('/promises', promisesMiddleware.validateFieldTitle ,createPromise);
router.delete('/promises/:id', promisesMiddleware.validateId, deletePromise);
router.put('/promises/:id',
promisesMiddleware.validateId,
promisesMiddleware.validateFieldTitle,
promisesMiddleware.validateFieldStatus,
updatePromise);

module.exports = router;

