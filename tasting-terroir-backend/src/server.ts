import http from 'http';
import express from 'express';
import './config/logging';
import 'reflect-metadata';
import { corsHandler } from './middleware/corsHandler';
import { loggingHandler } from './middleware/loggingHandler';
import { routeNotFound } from './middleware/routeNotFound';
import HealthcheckController from './controllers/healthcheck';
import { defineRoutes } from './modules/routes';
import { MONGO, SERVER } from './config/config';
import mongoose from 'mongoose';
import { declareHandler } from './middleware/declareHandler';
import TastingNotesController from './controllers/tastingNoteController';

export const application = express();
export let server: ReturnType<typeof http.createServer>;

export const Main = async () => {
    logging.boldedLog([{ message: 'Initializing API', logType: 'log' }]);
    application.use(express.urlencoded({ extended: true }));
    application.use(express.json());

    logging.boldedLog([{ message: 'Connecting to MongoDB', logType: 'log' }]);
    try {
        const connection = await mongoose.connect(MONGO.MONGO_CONNECTION, MONGO.MONGO_OPTIONS);
        logging.boldedLog([{ message: `Connected to Mongo: ${connection.version}`, logType: 'log' }]);
    } catch (error) {
        logging.boldedLog([
            { message: 'Unable to connect to Mongo', logType: 'log' },
            { message: error, logType: 'error' }
        ]);
    }

    logging.boldedLog([{ message: 'Logging & Configuration', logType: 'log' }]);
    application.use(declareHandler);
    application.use(loggingHandler);
    application.use(corsHandler);

    logging.boldedLog([{ message: 'Define Controller Routing', logType: 'log' }]);
    defineRoutes([HealthcheckController, TastingNotesController], application);

    logging.boldedLog([{ message: 'Define Routing Error', logType: 'log' }]);
    application.use(routeNotFound);

    logging.boldedLog([{ message: 'Starting Server', logType: 'log' }]);
    server = http.createServer(application);
    server.listen(SERVER.SERVER_PORT, () => {
        logging.boldedLog([{ message: `Server started on ${JSON.stringify(server.address())}`, logType: 'log' }]);
    });
};

export const Shutdown = (callback: any) => server && server.close(callback);

Main();
