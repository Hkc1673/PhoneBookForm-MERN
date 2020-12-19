const User = require('../models/User');
const { validationResult } = require('express-validator');

exports.addUser = async (req, res) => {
    try {
        const { firstName, lastName, phone } = req.body;

        //field validation
        const validationErr = validationResult(req);
        if (validationErr.errors.length > 0) {
            return res.status(400).json({ errors: validationErr.array() });
        }

        // category exist check
        const existUser = await User.findOne({ firstName: firstName });
        if (existUser) {
            return res.status(400).json({ errors: [{ message: "User already exists" }] })
        }

        //save category
        const user = new User({
            firstName: firstName,
            lastName: lastName,
            phone: phone
        });

        // const user = new User(req.body);
        const addedUser = await user.save({ new: true });
        // res.status(200).send('Category added');
        res.status(200).json(addedUser);
    }
    catch (err) {
        return res.status(500).json({ errors: [{ message: err.message }] });
    }
}

exports.getUser = async (req, res) => {
    try {
        const user = await User.find({});
        res.status(200).json(user);

    }
    catch (err) {
        return res.status(500).json({ errors: [{ message: err.message }] });
    }

}

exports.deleteUser = async (req, res) => {
    const id = req.params.id;
         await User.findByIdAndRemove(id).exec();
        res.send("deleted");   
};