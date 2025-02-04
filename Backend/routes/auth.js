const express = require('express');
const Router = express.Router();

Router.get('/', (req, res) => {
    obj = {
        a: "RAHUL",
        number: 2
    }
    res.json(obj)
})
module.exports = Router;