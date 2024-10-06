import { Request, Response, NextFunction } from 'express';
import { Document } from 'mongoose';

declare global {
    namespace Express {
        interface Request {
            mongoGet: Document | undefined;
            mongoCreate: Document | undefined;
            mongoUpdate: Document | undefined;
            mongoGetAll: Document[];
            mongoQuery: Document[];
        }
    }
}

export function declareHandler(req: Request, res: Response, next: NextFunction) {
    req.mongoGet = undefined;
    req.mongoCreate = undefined;
    req.mongoUpdate = undefined;
    req.mongoGetAll = [];
    req.mongoQuery = [];
    next();
}
