import jwt from 'jsonwebtoken';
import { JWT_VARS } from '../config/config';

class jwtHandler {
    createToken(id: string) {
        return jwt.sign({ id }, JWT_VARS.JWT_SECRET, { expiresIn: 3600 });
    }
}

export const JwtHandler = new jwtHandler();
