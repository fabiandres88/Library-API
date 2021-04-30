import * as dotenv from "dotenv";
dotenv.config();
import express from 'express';
var app = express();
import morgan from 'morgan';
import mongoose from 'mongoose';

//setting logger
morgan(function (tokens: any, req: any, res: any) {
    return [
        tokens.method(req, res),
        tokens.url(req, res),
        tokens.status(req, res),
        tokens.res(req, res, 'content-length'), '-',
        tokens['response-time'](req, res), 'ms'
    ].join(' ')
})

//setting database connection
const connect = mongoose.connect(`${process.env.DB_HOST}`);

connect.then((db: any) => {
    console.log('Connection successful to database');
}).catch((error: Error) => {
    console.error(error);
});

app.use(morgan('dev'));
app.use(express.json());

//setting server connection
const port = process.env.SERVER_PORT || 3000;

app.listen(port, () => {
    console.log(`server ready at port: ${process.env.PORT}`)
});
