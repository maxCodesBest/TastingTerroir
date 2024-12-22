import { Request, Response, NextFunction } from 'express';
import { Model } from 'mongoose';
import bcrypt from 'bcrypt';

export function MongoLogIn(model: Model<any>) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;

        descriptor.value = async function (req: Request, res: Response, next: NextFunction) {
            try {
                const document = await model.findOne({ email: req.body.email });

                if (document) {
                    const auth = await bcrypt.compare(req.body.password, document.password);
                    if (!auth) {
                        return res.status(401).json({ error: 'incorrect password' });
                    }
                    req.mongoGet = document;
                } else {
                    return res.status(400).json({ error: 'incorrect email' });
                }
            } catch (error) {
                logging.error(error);

                return res.status(400).json(error);
            }

            return originalMethod.call(this, req, res, next);
        };

        return descriptor;
    };
}
