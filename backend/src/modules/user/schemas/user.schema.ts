import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
    username: String,
    name: String,
    email: String,
    password: String
});