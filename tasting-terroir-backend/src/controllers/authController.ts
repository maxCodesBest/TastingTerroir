import { NextFunction, Request, Response } from 'express';
import { Controller } from '../decorators/controller';
import { Route } from '../decorators/route';
import { UserModel } from '../models/userModel';
import { MongoSignUp } from '../decorators/mongoose/auth/signUp';
import { JwtHandler } from '../handlers/jwtHandler';
import { MongoLogIn } from '../decorators/mongoose/auth/logIn';
import { jwtAuth } from '../decorators/auth/jwtAuth';

@Controller('/auth')
class AuthController {
    @Route('post', '/signup')
    @MongoSignUp(UserModel)
    signup(req: Request, res: Response, next: NextFunction) {
        const userId = req.mongoCreate?._id as string;
        const token = JwtHandler.createToken(userId);

        return res.status(201).json({ newUserId: userId, jwt: token });
    }

    @Route('post', '/login')
    @MongoLogIn(UserModel)
    login(req: Request, res: Response, next: NextFunction) {
        const userId = req.mongoGet?._id as string;
        const userName = req.mongoGet?.toObject().name;
        const jwt = JwtHandler.createToken(userId);

        return res.status(200).json({ userInfo: { userId, userName }, jwt });
    }

    @Route('get', '/validateAuth')
    @jwtAuth()
    validateAuth(req: Request, res: Response, next: NextFunction) {
        return res.status(200).json({ authenticated: true });
    }
}

export default AuthController;
