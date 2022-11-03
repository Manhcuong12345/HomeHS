import { Schema, Document } from 'mongoose';

export interface IFComment extends Document {
    articlesId: {
        _id: Schema.Types.ObjectId;
        title: string;
        body: string;
        category: {
            _id: Schema.Types.ObjectId;
            name: string;
        };
    };
    authorId: {
        _id: Schema.Types.ObjectId;
        name: string;
        email: string;
    };
}
