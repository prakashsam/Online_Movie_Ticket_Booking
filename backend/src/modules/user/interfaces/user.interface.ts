import { Document } from 'mongoose';

export interface User extends Document {
    readonly username: String;
    readonly name: string;
    readonly email: String;
    readonly password: String;
}