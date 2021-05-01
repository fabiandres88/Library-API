import "reflect-metadata";
import express from "express";
import { resolve } from "path";
import { createExpressServer, Action } from "routing-controllers";

const app: express.Application = createExpressServer({
    defaultErrorHandler: false,
    classTransformer: true,
    routePrefix: "/library",
    validation: {
        validationError: {
            target: false
        }
    },
    controllers: [resolve(__dirname, "./controllers/**/*{,ts,.js}")]//we specify controller to use
});

export default app;