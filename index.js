require('dotenv').config();
var express = require('express');
var app = express();
var morgan = require('morgan');
var mongoose = require('mongoose');

var usersRouter = require('./routes/users');
var booksRouter = require('./routes/books');

morgan(function (tokens, req, res) {
    return [
        tokens.method(req, res),
        tokens.url(req, res),
        tokens.status(req, res),
        tokens.res(req, res, 'content-length'), '-',
        tokens['response-time'](req, res), 'ms'
    ].join(' ')
})

const connect = mongoose.connect(process.env.DB_HOST);

connect.then((db) => {
    console.log('Connection successful to database');
}).catch((error) => {
    console.error(error);
});

app.use(morgan('dev'));
app.use(express.json());

app.use('/users', usersRouter);
app.use('/books', booksRouter);


const port = process.env.SERVER_PORT || 3000;

app.listen(port, () => {
    console.log(`server ready at port: ${process.env.PORT}`)
})