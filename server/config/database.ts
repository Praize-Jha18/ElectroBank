import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

export const DATABASE_CLIENT = new MongoClient(process.env.DB_CONNECTION_STRING!);
export const DATABASE_CONN = DATABASE_CLIENT.db(process.env.DB_NAME);