import { NextFunction, Request, Response } from 'express';
import { Controller } from '../decorators/controller';
import { Route } from '../decorators/route';
import { MongoGetAll } from '../decorators/mongoose/getAll';
import { MongoGet } from '../decorators/mongoose/get';
import { MongoCreate } from '../decorators/mongoose/create';
import { MongoQuery } from '../decorators/mongoose/query';
import { MongoUpdate } from '../decorators/mongoose/update';
import { MongoDelete } from '../decorators/mongoose/delete';
import { TastingNoteModel } from '../models/tastingNoteModel';
import { jwtAuth } from '../decorators/auth/jwtAuth';

@Controller('/tastingNotes')
class TastingNotesController {
    @Route('get', '/get/all')
    @MongoGetAll(TastingNoteModel)
    getAll(req: Request, res: Response, next: NextFunction) {
        return res.status(200).json(req.mongoGetAll);
    }

    @Route('get', '/get/:id')
    @MongoGet(TastingNoteModel)
    get(req: Request, res: Response, next: NextFunction) {
        return res.status(200).json(req.mongoGet);
    }

    @Route('post', '/create')
    @jwtAuth()
    @MongoCreate(TastingNoteModel)
    create(req: Request, res: Response, next: NextFunction) {
        return res.status(201).json(req.mongoCreate);
    }

    @Route('post', '/query')
    @MongoQuery(TastingNoteModel)
    query(req: Request, res: Response, next: NextFunction) {
        return res.status(200).json(req.mongoQuery);
    }

    @Route('patch', '/update/:id')
    @MongoUpdate(TastingNoteModel)
    update(req: Request, res: Response, next: NextFunction) {
        return res.status(201).json(req.mongoUpdate);
    }

    @Route('delete', '/delete/:id')
    @MongoDelete(TastingNoteModel)
    delete(req: Request, res: Response, next: NextFunction) {
        return res.status(200).json({ message: 'deleted' });
    }
}

export default TastingNotesController;
