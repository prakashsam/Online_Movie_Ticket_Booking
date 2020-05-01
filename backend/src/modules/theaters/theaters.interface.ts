import { Document } from 'mongoose';

export interface Theaters extends Document {
    readonly name: String;
    readonly description: string;
    readonly poster: String;
    readonly seats: [];
    readonly seatAvaliable: Number; 
}