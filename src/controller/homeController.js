const express = require('express');

var home = express.Router();

home.get('/home', (req, res) => {
    res.send({
        A00972539: {
            name:"Timoteo Shockness",
            course: "COMPUTER SYSTEM"
        }
    });
});

module.exports = home;