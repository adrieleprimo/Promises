const express = require('express');
const router = express.Router();
const promisesControllers = require('./controllers/promisesControllers');
const promisesMiddleware = require('./middlewares/promisesMiddleware');

router.get('/promises', promisesControllers.getAllPromises);
router.post('/promises', promisesMiddleware.validateFieldTitle ,promisesControllers.createPromise);
router.delete('/promises/:id', promisesControllers.deletePromise);
router.put('/promises/:id',
promisesMiddleware.validateFieldTitle,
promisesMiddleware.validateFieldStatus,
promisesControllers.updatePromise);

module.exports = router;

