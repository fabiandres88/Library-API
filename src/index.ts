import "reflect-metadata";
import dotenv from "dotenv";
import app from "./app"
import morgan from 'morgan';
import mongoose from 'mongoose';
dotenv.config();
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
const connect = mongoose.connect(`${process.env.DB_HOST}`, {
    "useNewUrlParser":true,
    "useUnifiedTopology": true,
    "useCreateIndex": true
});

connect.then((db: any) => {
    ~console.log('Connection successful to database', process.env.DB_HOST);
}).catch((error: Error) => {
    console.error(error);
});

app.use(morgan('dev'));

//setting server connection
const port = process.env.SERVER_PORT || 3000;

app.listen(port, () => {
    console.log(`server ready at port: ${process.env.PORT}`)
});
