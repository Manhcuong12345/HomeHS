import { Schema, Document } from 'mongoose';

export interface IFUser extends Document {
    _id: string;
    name: string;
    email: string;
    password: string;
    phoneNumber: string;
    address: string;
    gender: string;
    //role: string;
    generateToken(): string;
    hashPassword(): void;
    comparePassword(password: string): boolean;
}
