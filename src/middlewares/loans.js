const Books = require('../models/books');
const Users = require('../models/users');
const Loans = require('../models/loans');

//check existence of a book
const validateBookId = ((req, res, next) => {
    var { book } = req.body;
    Books.findById(book)
        .then((book) => {
            if (!book) {
                res.statusCode = 404;                
                res.end('Book not found');
                return
            } else {
                return req.body;
            }
        })
        next();
});

const validateDateLoan = ((req, res, next) => {
    var { dateLoan } = req.body;
    if (!dateLoan) {
        res.statusCode = 404;        
        res.end('Date of loan is required');
    }
    return next()
});

//check existence of a user
const validateUserId = ((req, res, next) => {
    var { user } = req.body;    
    Users.findById(user)
        .then((user) => {
            if (!user) {
                res.statusCode = 404;                
                res.end('User not found');
                return
            } else {
                return next();
            }
        })
});

var availability = ((req, res, next) => {
    var { book } = req.body;
    Loans.find({book})
        .then((loan) => {
            if (loan == undefined) {
                return
            } if (loan) {
                for (let i = 0; i <= loan.length - 1; i++) {
                    if (loan[i].dateBack == null) {
                        res.statusCode = 400;                        
                        res.end("Book not available");
                        break;                        
                    }                    
                }
            }
        });
    return next();
});
//avoiding to update a date delivery already updated 
const validateLoan = ((req, res, next) => {
    Loans.findById(req.params.loanId)
        .then((loan) => {
            if (!loan) {
                res.statusCode = 404;
                res.setHeader('Content-Type', 'application/json');
                res.json('Loan not found');
                return
            }
            if (loan.dateBack) {
                res.statusCode = 400;
                res.setHeader('Content-Type', 'application/json');
                res.json('Updating Not allowed');
            } else {
                return next();
            }
        })
});

module.exports = { validateBookId, validateDateLoan, validateUserId, availability, validateLoan };
