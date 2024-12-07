import jwt from 'jsonwebtoken';
import { JWT_VARS } from '../config/config';

class jwtHandler {
    createToken(id: string) {
        return jwt.sign({ id }, JWT_VARS.JWT_SECRET, { expiresIn: 3600 });
    }

    validateToken(token: string) {
        try {
            let finalToken = token;
            if (token.includes('bearer ')) {
                finalToken = token.slice(7); //TODO - really? please find a better way to remove the "bearer " text...
            }
            jwt.verify(finalToken, JWT_VARS.JWT_SECRET);
            return true;
        } catch (error) {
            return false;
        }

        //TODO - add error handling for when jwt malformed or bad signature etc, try sending "testytest" as jwt and see the crazy error
    }
}

export const JwtHandler = new jwtHandler();
