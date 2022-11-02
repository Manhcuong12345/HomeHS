import mongoose, { Schema } from 'mongoose';
import { config } from '../config/config';
import { IFArticle } from '../interfaces/article.interface';
import Joi from 'joi';

const PostSchema = new Schema({
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
    },
    author: {
        _id: {
            type: Schema.Types.ObjectId
        },
        name: {
            type: String
        },
        email: {
            type: String
        },
        address: {
            type: String
        },
        role: {
            type: String
        }
    }
});

export const Posts = mongoose.model<IFArticle>('Posts', PostSchema);
