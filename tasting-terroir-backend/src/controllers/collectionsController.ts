import { NextFunction, Request, Response } from 'express';
import { Controller } from '../decorators/controller';
import { Route } from '../decorators/route';
import { MongoGet } from '../decorators/mongoose/get';
import { UserModel } from '../models/userModel';
import { getCollectionTitlesByIds, getCollectionsByIds } from '../services/collectionService';
import { jwtAuth } from '../decorators/auth/jwtAuth';
import { MongoCreate } from '../decorators/mongoose/create';
import { CollectionModel } from '../models/collectionModel';
import { addCollectionToUser } from '../services/userService';

@Controller('/collections')
class CollectionsController {
    @Route('get', '/getAllUserCollectionTitles/:id')
    @jwtAuth()
    @MongoGet(UserModel)
    async getAllTitles(req: Request, res: Response, next: NextFunction) {
        const userDoc = req.mongoGet;
        if (userDoc) {
            const user = userDoc.toObject();
            const collectionTitles = await getCollectionTitlesByIds(user.collections);
            return res.status(200).json(collectionTitles);
        }
    }
    @Route('get', '/getAllUserCollections/:id')
    @jwtAuth()
    @MongoGet(UserModel)
    async getAllUserCollections(req: Request, res: Response, next: NextFunction) {
        const userDoc = req.mongoGet;
        if (userDoc) {
            const user = userDoc.toObject();
            const collections = await getCollectionsByIds(user.collections);
            return res.status(200).json(collections);
        }
    }
    @Route('post', '/create')
    @jwtAuth()
    @MongoCreate(CollectionModel)
    async create(req: Request, res: Response, next: NextFunction) {
        const newCollection = req.mongoCreate?._id as string;
        const userId = req.body.decodedJwt.id;
        await addCollectionToUser(userId, newCollection);

        return res.status(201);
    }
}

export default CollectionsController;
