import { NextFunction, Request, Response } from 'express';
import { Controller } from '../decorators/controller';
import { Route } from '../decorators/route';
import { Validate } from '../decorators/validate';
import { MongoGetAll } from '../decorators/mongoose/getAll';
import { TestableModel } from '../models/testableModel';
import { MongoGet } from '../decorators/mongoose/get';
import { MongoCreate } from '../decorators/mongoose/create';
import { MongoQuery } from '../decorators/mongoose/query';
import { MongoUpdate } from '../decorators/mongoose/update';
import { MongoDelete } from '../decorators/mongoose/delete';

@Controller('/testableController')
class testableController {
    @Route('get', '/get/all')
    @MongoGetAll(TestableModel)
    getAll(req: Request, res: Response, next: NextFunction) {
        return res.status(200).json(req.mongoGetAll);
    }

    @Route('get', '/get/:id')
    @MongoGet(TestableModel)
    get(req: Request, res: Response, next: NextFunction) {
        return res.status(200).json(req.mongoGet);
    }

    @Route('post', '/create')
    @MongoCreate(TestableModel)
    create(req: Request, res: Response, next: NextFunction) {
        return res.status(201).json(req.mongoCreate);
    }

    @Route('post', '/query')
    @MongoQuery(TestableModel)
    query(req: Request, res: Response, next: NextFunction) {
        return res.status(200).json(req.mongoQuery);
    }

    @Route('patch', '/update/:id')
    @MongoUpdate(TestableModel)
    update(req: Request, res: Response, next: NextFunction) {
        return res.status(201).json(req.mongoUpdate);
    }

    @Route('delete', '/delete/:id')
    @MongoDelete(TestableModel)
    delete(req: Request, res: Response, next: NextFunction) {
        return res.status(200).json({ message: 'deleted' });
    }
}

export default testableController;
