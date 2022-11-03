import mongoose, { Schema } from 'mongoose';
import { IFComment } from '../interfaces/comment.interface';
import Joi from 'joi';

const CommentSchema = new Schema({
    bodyText: {
        type: String
    },
    articlesId: {
        _id: {
            type: Schema.Types.ObjectId
        },
        title: {
            type: String
        },
        body: {
            type: String
        },
        category: {
            _id: {
                type: Schema.Types.ObjectId
            },
            name: {
                type: String
            }
        }
    },
    authorId: {
        _id: {
            type: Schema.Types.ObjectId
        },
        name: {
            type: String
        },
        email: {
            type: String
        }
    }
});

export const CommentAdd = mongoose.model<IFComment>('CommentAdd', CommentSchema);
