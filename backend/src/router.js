const express = require('express');
const router = express.Router();


const getAllPromises = require('./controllers/promises/allPromises');
const createPromise = require('./controllers/promises/createPromise');
const deletePromise = require('./controllers/promises/deletePromise');
const updatePromise = require('./controllers/promises/updatePromise');

const promisesMiddleware = require('./middlewares/promisesMiddleware');
const createPromiseSchema = require('./validations/createPromiseSchema');const updatePromiseSchema = require('./validations/updatePromiseSchema');

router.get('/promises', getAllPromises);
router.post('/promises', promisesMiddleware.validateFields(createPromiseSchema),createPromise);
router.delete('/promises/:id', promisesMiddleware.validateId, deletePromise);
router.put('/promises/:id', promisesMiddleware.validateId,
promisesMiddleware.validateFields(updatePromiseSchema),updatePromise);

module.exports = router;

