const express = require('express');
const router = express.Router();
const databaseConnection = require('../database/database-connection');
const path = require('path');
const publicPath = path.join(__dirname, '../../public');

router.get('*', (req, res, next) => {
    res.sendFile('index.html');
    res.end();
    next();
});


router.post('/login', (req, res, next) => {
    var firstname, lastname, username, email, password, gender;
    
    var user =  {
        firstname: req.params.firstname,
        lastname: req.params.lastname,
        username: req.params.username,
        email: req.params.email,
        password: req.params.password,
        gender: request.params.gender
    };

    if (user) {
        var newUser = databaseConnection.createUser(user);  
        res.sendFile('login.html');
        res.end();
        next();
    } else {
        console.log('Error! Couldn\'t create User.');
        res.sendFile('register.html');
        res.end();
    }
    
});

module.exports = router;