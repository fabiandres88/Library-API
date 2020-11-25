var express = require('express');
var mongoose = require('mongoose');
var middleware = require('../middlewares/users');

const Users = require('../models/users');

const usersRouter = express.Router();

usersRouter.route('/')
    .get((req, res, next) => {
        Users.find({})
            .then((users) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(users);
            }, (error) => next(error))
            .catch((error) => next(error));
    })

    .post(middleware.validateUser,(req, res, next) => {        
        Users.create(req.body)
            .then((user) => {                          
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(user);                
            }, (error) => next(error))
            .catch((error) => next(error))
    })

    .put((req, res, next) => {
        res.end('PUT operation not supported on /users.');
    })

    .delete((req, res, next) => {
        res.end('DELETE operation not supported on /users.');
    });

usersRouter.route('/:userId')

    .get((req, res, next) => {
        
        Users.findById(req.params.userId)
            .then((user) => {                
                if(!user) {
                    res.statusCode = 404;
                    res.end("User not found");
                    return;
                }
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(user);
            }, (error) => next(error))
            .catch((error) => next(error));
    })

    .post((req, res, next) => {
        res.statusCode = 403;
        res.end('POST operation not supported on /users/'
            + req.params.userId);
    })

    .put((req, res, next) => {
        Users.findByIdAndUpdate(req.params.userId, {
            $set: req.body
        }, { new: true })
            .then((user) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(user);
            }, (error) => next(error))
            .catch((error) => next(error));
    })

    .delete((req, res, next) => {
        Users.findByIdAndDelete(req.params.userId)
            .then((response) => {
                res.statusCode = 204;
                res.setHeader('content-Type', 'application/json');
                res.json(response);
            }, (error) => next(error))
            .catch((error) => next(error));
    });

    

module.exports = usersRouter;
