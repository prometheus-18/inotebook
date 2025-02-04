const express = require('express');
const Router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');

//create a user using :POST "/api/auth/createUser". No Login required
Router.post('/', [
    body('name', 'Enter a valid name').isLength({ min: 3 }),
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password must be atleast 5 characters').isLength({ min: 5 }),
], async (req, res) => {
    //If there are errors, return Bad request and the errors
    const result = validationResult(req);
    if (!result.isEmpty()) {
        return res.status(400).json({ error: result.array() });
    }
    //check wether the user with this email exists already
    try {
        let user = await User.findOne({ email: req.body.email });
        console.log(user);

        if (user) {
            return res.status(400).json({ error: "Sorry a user with this email already exists" });
        }
        user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        });
        res.json(user);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Some error occured");
    }
})


module.exports = Router;
