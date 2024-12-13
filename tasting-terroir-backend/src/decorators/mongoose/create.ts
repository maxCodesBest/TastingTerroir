import { Request, Response, NextFunction } from 'express';
import mongoose, { Model } from 'mongoose';

export function MongoCreate(model: Model<any>) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;

        descriptor.value = async function (req: Request, res: Response, next: NextFunction) {
            try {
                const data = req.body.note ? req.body.note : req.body; //TODO - you cant put a specific code for a specific scenario in a generic function you use everywhere, this is a temp solution for the demo, fix later
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
