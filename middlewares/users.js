var express = require('express');
var mongoose = require('mongoose');

const validateUser =((req, res, next) => {
    var {firstName, lastName, dni, email, phone, password} =req.body;
    if(!firstName | !lastName | !dni | !email | !phone | !password) {
        res.statusCode = 400;
        res.setHeader('Content-Type', 'application/json');
        res.json('firstName, lastName, dni, email, phone and password are required');
    }else {
        return next();
    } 
});

module.exports = { validateUser };

