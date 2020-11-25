var express = require('express');
var mongoose = require('mongoose');

const Books = require('../models/books');
const middlewares = require('../middlewares/books');

const booksRouter = express.Router();

booksRouter.route('/')
    .get((req, res, next) => {
        Books.find({})
            .then((books) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(books);
            }, (error) => next(error))
            .catch((error) => next(error));
    })

    .post((req, res, next) => {
        Books.create(req.body)
            .then((book) => {                
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(book);
            }, (error) => next(error))
            .catch((error) => next(error))
    })

    .put((req, res, next) => {
        res.end('PUT operation not supported on /books.');
    })

    .delete((req, res, next) => {
        res.end('DELETE operation not supported on /books.');
    });

booksRouter.route('/:bookId')

    .get(middlewares.availability, (req, res, next) => {
        Books.findById(req.params.bookId)
            .then((book) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(book);
            }, (error) => next(error))
            .catch((error) => next(error));
    })

    .post((req, res, next) => {
        res.statusCode = 403;
        res.end('POST operation not supported on /books/'
            + req.params.bookId);
    })

    .put((req, res, next) => {
        Books.findByIdAndUpdate(req.params.bookId, {
            $set: req.body
        }, { new: true })
            .then((book) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(book);
            }, (error) => next(error))
            .catch((error) => next(error));
    })

    .delete((req, res, next) => {
        Books.findByIdAndDelete(req.params.bookId)
            .then((response) => {
                res.statusCode = 204;
                res.setHeader('content-Type', 'application/json');
                res.json(response);
            }, (error) => next(error))
            .catch((error) => next(error));
    });


module.exports = booksRouter;
