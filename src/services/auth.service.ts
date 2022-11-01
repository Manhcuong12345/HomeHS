import { User } from '../models/user.model';
import { Request, Response } from 'express';
import Joi from 'joi';
import axios from 'axios';
import { HttpException } from '../common';
import bcrypt from 'bcrypt';
import { pick } from 'lodash';
import { IFUser } from '../interfaces/user.interface';
import { AUTH_FAIL } from '../common/constants/err.constants';

export class AuthService {
    private static instance: AuthService;

    static getInstance(): AuthService {
        if (!AuthService.instance) {
            AuthService.instance = new AuthService();
        }
        return AuthService.instance;
    }
    /**
     * Function to login user
     * @param {*} password
     * @param {*} email
     *
     */

    async login(email: string, password: string, res: Response) {
        //const { error } = AuthService.validate({ email, password });
        //if (error) throw new HttpException(400, { error_code: '400', error_message: error.details[0].message });

        const user = await User.findOne({ email });
        if (!user) throw new HttpException(400, AUTH_FAIL);

        const isValid = await bcrypt.compare(password, user.password);
        if (!isValid) throw new HttpException(400, AUTH_FAIL);

        const response = {
            user: pick(user, ['_id', 'name', 'email'])
        };

        const token = user.generateToken();
        res.header('x-auth-token', token).send(response);
    }

    // /**
    //  * Function to validate login info
    //  *
    //  * @param loginData login info
    //  * @returns
    //  */
    // static validate(loginData: { email: string; password: string }): Joi.ValidationResult {
    //     const schema = Joi.object().keys({
    //         email: Joi.string().email().required(),
    //         password: Joi.string().min(6).max(50).required()
    //     });
    //     return schema.validate(loginData);
    // }
}
