import mongoose, { Schema } from 'mongoose';
import Joi from 'joi';

const CategorySchema = new Schema({
    name: {
        type: String
    }
});

export const Category = mongoose.model('Category', CategorySchema);
