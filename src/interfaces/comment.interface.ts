import { Schema, Document } from 'mongoose';

export interface IFComment extends Document {
    _id: string;
    articletId: {
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
