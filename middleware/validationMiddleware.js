const { check } = require('express-validator');

exports.userValidation = [
    check('firstName', "Please enter a name minumum 2 and maximum 20 chars").isLength({ min: 2, max: 20 }),
    check('lastName', "Please enter a name maximum 200 chars").isLength({ max: 200 }),
    check('phone', "Please enter a number maximum 11 figure").isLength({ max: 11 }),
]