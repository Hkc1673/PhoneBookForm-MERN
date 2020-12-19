const express = require('express');
const router = express.Router();

const UserController = require('../controllers/UserController');
const validations = require('../middleware/validationMiddleware');

router.post('/addUser', validations.userValidation, UserController.addUser);
router.get('/getUser', UserController.getUser);
router.get('/deleteUser/:id', UserController.deleteUser);

module.exports = router;