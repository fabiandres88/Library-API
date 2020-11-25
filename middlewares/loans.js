var express = require('express');
var mongoose = require('mongoose');
const Books = require('../models/books');
const Users = require('../models/users');

const validateBookId = ((req, res, next) => {
    var { book } = req.body;
    Books.findById(book)
        .then((book) => {
            if (!book) {
                res.statusCode = 404;
                res.json('Book not found');
                return
            } else {
                return next();
            }
        })
});

const validateUserId = ((req, res, next) => {
    var { user } = req.body;
    Users.findById(user)
        .then((user) => {
            if (!user) {
                res.statusCode = 404;
                res.json('User not found');
                return
            } else {
                return next();
            }
        })
}); 

module.exports = { validateBookId, validateUserId };
