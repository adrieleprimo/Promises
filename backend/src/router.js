const express = require('express');
const router = express.Router();


const getAllPromises = require('./controllers/promises/allPromises');
const createPromise = require('./controllers/promises/createPromise');
const deletePromise = require('./controllers/promises/deletePromise');
const updatePromise = require('./controllers/promises/updatePromise');

const userRegistry = require('./controllers/user/newUserRegistration');
const login = require('./controllers/user/login');

const promisesMiddleware = require('./middlewares/promisesMiddleware');
const createPromiseSchema = require('./validations/createPromiseSchema');const updatePromiseSchema = require('./validations/updatePromiseSchema');
const userRegistrySchema = require('./validations/userRegistrySchema');
const detailUser = require('./controllers/user/detailUser');
const verifyLoggedInUser = require('./middlewares/autenthication');
const userLoginSchema = require('./validations/userLoginSchema');

router.post('/user', promisesMiddleware.validateFields(userRegistrySchema),userRegistry);
router.post('/login', promisesMiddleware.validateFields(userLoginSchema), login);

router.use(verifyLoggedInUser);
router.get('/user', detailUser);


router.get('/promises', getAllPromises);
router.post('/promises', promisesMiddleware.validateFields(createPromiseSchema),createPromise);
router.delete('/promises/:id', promisesMiddleware.validateId, deletePromise);
router.put('/promises/:id', promisesMiddleware.validateId,
promisesMiddleware.validateFields(updatePromiseSchema),updatePromise);

module.exports = router;

