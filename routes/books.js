const express = require('express');
const Books = require('../models/books');

const booksRouter = express.Router();

booksRouter.route('/')
    .get((req, res) => {

    })
    .post((req, res) => {

    })
    .put((req, res) => {

    })
    .delete((req, res) => {

    });

    module.exports = booksRouter;