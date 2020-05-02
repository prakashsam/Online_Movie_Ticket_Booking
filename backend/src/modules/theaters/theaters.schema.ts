import * as mongoose from 'mongoose';

export const TheatersSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    poster: { type: String, required: true },
    seats: { type: Array, required: true },
    seatAvaliable: { type: String, required: true }
});