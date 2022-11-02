import { Schema, Document } from 'mongoose';

export interface IFArticle extends Document {
    _id: string;
    title: string;
    body: string;
    category: {
        _id: Schema.Types.ObjectId;
        name: string;
    };
    author: {
        _id: Schema.Types.ObjectId;
        name: string;
        email: string;
        address: string;
        role: string;
    };
}
