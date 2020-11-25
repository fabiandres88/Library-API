var express = require('express');
var mongoose = require('mongoose');
var middlewares = require('../middlewares/loans')

const Loans = require('../models/loans');

const loansRouter = express.Router();

loansRouter.route('/')

    .get((req, res, next) => {
        Loans.find({}).populate('book').populate('user')
            .then((registers) => {
                if (registers) {
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'application/json');
                    res.json(registers);
                } else {
                    res.end('There are not any register');
                };
            }, (error) => next(error))
            .catch((error) => next(error));
    })
    .post(middlewares.validateBookId,middlewares.validateUserId,(req, res, next) => {        
        Loans.create(req.body)
            .then((loan) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(loan);
            }, (error) => next(error))
            .catch((error) => next(error));
    });

loansRouter.route('/:loanId')

    .put((req, res, next) => {
        var { dateBack } =req.body;
        Loans.findByIdAndUpdate(req.params.loanId, {            
            $set: dateBack
        }, { new: true })
            .then((loan) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(loan);
            }, (error) => next(error))
            .catch((error) => next(error));
    })

module.exports = loansRouter;