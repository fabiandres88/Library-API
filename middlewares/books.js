var express = require('express');
var mongoose = require('mongoose');
const Loans = require('../models/loans');

const availability = ((req, res, next) => {    
    Loans.find({ book:req.params.bookId })
        .then((loan) => {            
            if(loan && loan[0].dateBack === null | !loan[0].dateBack){                
                    res.statusCode = 404;
                    res.json('This book is not available');
                    return
            }
            if(!loan) {
                return next();
            }
        })
});

module.exports = { availability };