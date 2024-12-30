import { Request, Response, NextFunction } from 'express';
import { Model } from 'mongoose';

export function MongoQuery(model: Model<any>) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;

        descriptor.value = async function (req: Request, res: Response, next: NextFunction) {
            try {
                const { decodedJwt, ...query } = req.body;
                const documents = await model.find({ ...query });
                req.mongoQuery = documents;
            } catch (error) {
                logging.error(error);

                return res.status(400).json(error);
            }

            return originalMethod.call(this, req, res, next);
        };

        return descriptor;
    };
}
