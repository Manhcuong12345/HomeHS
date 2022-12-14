import mongoose, { Schema } from 'mongoose';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { config } from '../config/config';
import { IFUser } from '../interfaces/user.interface';
import Joi from 'joi';

const UserSchema = new Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    phoneNumber: {
        type: String
    },
    address: {
        type: String
    },
    password: {
        type: String
        // required: true
    },
    role: {
        type: String,
        enum: ['admin', 'user'],
        default: 'user'
    },
    gender: {
        type: String
    }
});

/**
 * Function generateToken when login user
 * @returns
 */
UserSchema.methods.generateToken = function (): string {
    const data = {
        _id: this._id,
        email: this.email,
        role: this.role
    };

    return jwt.sign(data, config.get('jwtKey'));
};

/**
 * Function hashPassword to create password
 * @returns
 */
UserSchema.methods.hashPassword = async function () {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
};

/**
 * Function comparePassword when create password
 * @returns
 */
UserSchema.methods.comparePassword = async function (password: string) {
    return await bcrypt.compare(password, this.password);
};

//Function validate schema
export function validate(user: any) {
    const schema = Joi.object().keys({
        id: Joi.string().allow(null).allow(''),
        name: Joi.string().allow(''),
        email: Joi.string()
            .email()
            .required()
            .allow('')
            // .regex(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/),
            .regex(/[a-zA-Z0-9_\.\+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-\.]+/),
        password: Joi.string().required().allow(''),
        // .regex(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/),
        phoneNumber: Joi.string()
            .allow('')
            .regex(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/),
        address: Joi.string().allow(''),
        gender: Joi.string().allow(null).allow(''),
        updated_time: Joi.number().allow(null).allow(''),
        created_time: Joi.number().allow(null).allow(''),
        user_created: Joi.string().allow(null).allow(''),
        user_updated: Joi.string().allow(null).allow(''),
        account_number: Joi.number().allow(null).allow(''),
        file_name: Joi.string().allow(null).allow(''),
        payment_method: Joi.string().allow(null).allow('')
    });
    return schema.validate(user);
}

export const User = mongoose.model<IFUser>('User', UserSchema);
