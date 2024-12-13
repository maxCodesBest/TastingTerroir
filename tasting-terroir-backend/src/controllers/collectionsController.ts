import { NextFunction, Request, Response } from 'express';
import { Controller } from '../decorators/controller';
import { Route } from '../decorators/route';
import { MongoGet } from '../decorators/mongoose/get';
import { UserModel } from '../models/userModel';
import { getCollectionTitlesByIds } from '../services/collectionService';

@Controller('/collections')
class CollectionsController {
    @Route('get', '/getAllUserCollectionTitles/:id')
    @MongoGet(UserModel)
    async getAllTitles(req: Request, res: Response, next: NextFunction) {
        const userDoc = req.mongoGet;
        if (userDoc) {
            const user = userDoc.toObject();
            const collectionTitles = await getCollectionTitlesByIds(user.collections);
            return res.status(200).json(collectionTitles);
        }
    }
}

export default CollectionsController;
