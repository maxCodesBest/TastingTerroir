import { NextFunction, Request, Response } from 'express';
import { JwtHandler } from '../../handlers/jwtHandler';

export function jwtAuth() {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = async function (req: Request, res: Response, next: NextFunction) {
            try {
                const token = req.headers.authorization;
                if (token) {
                    let finalToken = token;
                    if (token.includes('Bearer ')) {
                        finalToken = token.slice(7); //TODO - really? please find a better way to remove the "bearer " text...
                    }
                    const validation = JwtHandler.validateToken(finalToken);
                    if (validation) {
                        req.body.decodedJwt = JwtHandler.parseToken(finalToken);
                        return originalMethod.call(this, req, res, next);
                    }
                }
                return res.status(401).json({ authenticated: false }); //TODO - pleaseeee error handlinggg
            } catch (error) {
                logging.error(error);
                return res.status(401).json(error);
            }
        };
        return descriptor;
    };
}
