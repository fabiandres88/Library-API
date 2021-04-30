require('dotenv').config();
var express = require('express');
var mongoose = require('mongoose');
var middleware = require('../middlewares/users');
var jwt = require('jsonwebtoken');

const Users = require('../models/users');

const loginRouter = express.Router();

loginRouter.route('/')

    .post((req, res, next) => {
        var { email } = req.body;                
        var token = jwt.sign({ email: email }, process.env.JWT_KEY,{ expiresIn: 60 * 60 })            
            res.statusCode = 200;
            res.json(token);        
    });

module.exports = loginRouter;