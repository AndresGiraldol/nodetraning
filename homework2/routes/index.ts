import express from 'express';
import { Express } from 'express-serve-static-core';
import usersRouter from './user.router';
export function routerApi(app: Express) {
    const router = express.Router();
    app.use('/api/v1', router);
    router.use('/users', usersRouter);
}
