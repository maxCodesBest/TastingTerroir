import { NextFunction, Request, Response } from 'express';
import { Controller } from '../decorators/controller';
import { Route } from '../decorators/route';
import { UserModel } from '../models/userModel';
import { MongoSignUp } from '../decorators/mongoose/auth/signUp';
import { JwtHandler } from '../handlers/jwtHandler';

//TODO - right now we are working with a follow along tutorial,
// make sure to implement later relevant decorators like "@MongoCreate(UserModel)"
// also if it wasnt done the entire tutorial, make the auth mechanism a Guard like there was on transmit
// so it sits easily on all controllers and also you can make different guards easilly

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
    login(req: Request, res: Response, next: NextFunction) {
        return res.status(201).json(req.mongoCreate);
    }
}

export default AuthController;
