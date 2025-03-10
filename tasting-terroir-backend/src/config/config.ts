import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

export const DEVELOPMENT = process.env.NODE_ENV === 'development';
export const TEST = process.env.NODE_ENV === 'test';
export const PERSONAL_DEV_USER = process.env.PERSONAL_DEV_USER || '';

const MONGO_USER = process.env.MONGO_USER || '';
const MONGO_PASSWORD = process.env.MONGO_PASSWORD || '';
const MONGO_URL = process.env.MONGO_URL || '';
const MONGO_DATABASE = process.env.MONGO_DATABASE || '';
const MONGO_OPTIONS: mongoose.ConnectOptions = { retryWrites: true, w: 'majority', appName: 'tatingTerroir' };

export const MONGO = {
    MONGO_USER,
    MONGO_PASSWORD,
    MONGO_URL,
    MONGO_DATABASE,
    MONGO_OPTIONS,
    MONGO_CONNECTION: `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_URL}/${MONGO_DATABASE}`
};

const SERVER_HOSTNAME = process.env.SERVER_HOSTNAME || 'localhost';
const SERVER_PORT = process.env.SERVER_PORT ? Number(process.env.SERVER_PORT) : 2904;

export const SERVER = {
    SERVER_HOSTNAME,
    SERVER_PORT
};

const JWT_SECRET = process.env.JWT_SECRET || '';

export const JWT_VARS = {
    JWT_SECRET
};
