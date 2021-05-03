import "reflect-metadata";
import express from "express";
import { createExpressServer, Action } from "routing-controllers";

const app: express.Application = createExpressServer({
    routePrefix: "/library",
    classTransformer: false,
    controllers: [__dirname + "/controllers/**/*{.ts,.js}"]   //we specify controller to use
});
app.use(express.json());

export default app;