import { Request, Response, NextFunction } from 'express';
import mongoose, { Model } from 'mongoose';
import { UserModel } from '../../../models/userModel';
import { createNewCollection } from '../../../services/collectionService';

export function MongoSignUp(model: Model<any>) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;

        descriptor.value = async function (req: Request, res: Response, next: NextFunction) {
            try {
                const collectionId = createNewCollection('My Notes', req.body.name);
                const data = { ...req.body, collections: [collectionId] };

                const document = new model({
                    _id: new mongoose.Types.ObjectId(),
                    ...data
                });

                await document.save();

                req.mongoCreate = document;
            } catch (error) {
                logging.error(error);
                return res.status(400).json(error);
            }

            return originalMethod.call(this, req, res, next);
        };

        return descriptor;
    };
}
