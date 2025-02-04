const express = require('express');
const Router = express.Router();
const User = require('../models/User');


//create a user using :POST "/api/auth/". No auth required
Router.post('/', (req, res) => {
    console.log(req.body);
    const user = User(req.body);
    user.save();
    res.send(req.body);
    
})
module.exports = Router;