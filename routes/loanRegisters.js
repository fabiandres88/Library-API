var express = require('express');
var mongoose = require('mongoose');

const Loans = require('../models/loanRegisters');

const loansRouter = express.Router();

loansRouter.route('/')

    .get((req, res, next) => {
        Loans.find({}).populate('Users','Books')
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
    .post((req, res, next) => {
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
        Loans.findByIdAndUpdate(req.params.loanId, {
            $set: req.body
        }, { new: true })
            .then((loan) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(loan);
            }, (error) => next(error))
            .catch((error) => next(error));
    })

module.exports = loansRouter;