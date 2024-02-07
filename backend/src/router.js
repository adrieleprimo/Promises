const express = require('express');
const router = express.Router();


const getAllPromises = require('./controllers/allPromises');
const createPromise = require('./controllers/createPromise');
const deletePromise = require('./controllers/deletePromise');
const updatePromise = require('./controllers/updatePromise');

const userRegistry = require('./controllers/user');

const createPromiseSchema = require('./validations/createPromiseSchema');
const promisesMiddleware = require('./middlewares/promisesMiddleware');
const updatePromiseSchema = require('./validations/updatePromiseSchema');
const userRegistrySchema = require('./validations/userRegistry');


router.post('/user', promisesMiddleware.validateFields(userRegistrySchema),userRegistry);

router.get('/promises', getAllPromises);
router.post('/promises', promisesMiddleware.validateFields(createPromiseSchema),createPromise);
router.delete('/promises/:id', promisesMiddleware.validateId, deletePromise);
router.put('/promises/:id', promisesMiddleware.validateId,
promisesMiddleware.validateFields(updatePromiseSchema),updatePromise);

module.exports = router;

