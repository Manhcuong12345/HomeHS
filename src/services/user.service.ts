import { User, validate } from '../models/user.model';
import { pick } from 'lodash';
import { HttpException } from '../common';
import { filterRegisters } from '../lib/helper';
//import { upload } from '../middlewares/cloud_upload.middleware';
import {
    EMAIL_AND_PHONENUMBER_EXIST,
    EMAIL_ALREADY_EXIST,
    PHONENUMBER_ALREADY_EXIST,
    USER_NOT_FOUND,
    INVALID_PASSWORD,
    SAME_THE_CHANGE_PASSWORD,
    UNAUTHORIZED
} from '../common/constants/err.constants';

export class UserService {
    private static instance: UserService;

    static getInstance(): UserService {
        if (!UserService.instance) {
            UserService.instance = new UserService();
        }
        return UserService.instance;
    }

    /**
     *Function create user
     * @param {*} userData
     * @returns
     */
    async createUser(userData: any) {
        const user = new User(userData);

        await user.hashPassword();
        await user.save();

        return user;
    }

    /**
     * Function used to create filters
     * help filter data based on user data and user submitted data (search_string)
     *
     * @param {*} search_string
     * @param {*} user
     * @returns
     */
    getFilter(search_string: string, user: any) {
        let filter: any = {};

        if (search_string) {
            filter.$or = [
                { name: { $regex: new RegExp(['', search_string, ''].join(''), 'i') } },
                { email: { $regex: new RegExp(['', search_string, ''].join(''), 'i') } },
                { phoneNumber: { $regex: new RegExp(['', search_string, ''].join(''), 'i') } },
                { authType: { $regex: new RegExp(['', search_string, ''].join(''), 'i') } }
            ];
        }

        filterRegisters(filter);

        return filter;
    }

    /**
     * Function used to get data of all users and pagination
     *
     * @param {*} param0
     * @param {*} user
     * @returns
     */
    async getAllUsersAndPaging(
        { page, limit, search_string }: { page?: number; limit?: number; search_string?: string },
        user: any
    ) {
        if (!page || page <= 0) {
            page = 1;
        }
        if (!limit) {
            limit = 10;
        }

        let skip = 0;
        skip = (page - 1) * limit;

        const filter = this.getFilter(search_string, user);

        const users = await User.find(filter)
            .skip(skip)
            .limit(limit)
            .select('-password')
            .select('-fcm-token')
            .select('-otp');

        const documentCount = await User.countDocuments(filter);

        const response = {
            data: users,
            meta_data: {
                total_records: documentCount,
                page: page,
                limit: limit,
                total_page: Math.ceil(documentCount / Number(limit))
            }
        };

        return response;
    }

    /**
     * Function to get user data by token
     *
     * @param {*} user
     * @return
     */
    // async getMe(user: any) {
    //     const me = await User.findById(user._id).select('-password');
    //     if (!me) throw new HttpException(404, USER_NOT_FOUND);

    //     return me;
    // }

    /**
     * Function get id of user data
     *
     * @param {*} id
     * @param {*} user
     * @return
     */
    async getUserById(id: string) {
        const users = await User.findById(id).select('-password').select('-fcm_token');
        if (!users) throw new HttpException(404, { error_code: '404', error_message: 'User is not found' });

        return users;
    }

    /**
     * Function update user data
     *
     * @param {*} userData
     * @param {*} id
     * @param {*} user
     * @return
     *
     */
    async updateUser(id: string, userData: any) {
        const users = await User.findByIdAndUpdate(id, userData, { new: true }).select('-password');
        if (!users) throw new HttpException(404, { error_code: '404', error_message: 'User is not found' });

        return users;
    }

    /**
     * Function delete user data
     *
     * @param {*} id
     * @param {*} user
     * @return
     */
    async deleteUser(id: string, user: any) {
        const users = await User.findByIdAndDelete(id);
        if (!users) throw new HttpException(400, { error_code: '404', error_message: 'User is not found' });

        return users;
    }

    /**
     * Function changePassword in profile user
     * @param {*} id
     * @param {*} password
     * @param {*} new_password
     * @return
     */
    // async changePassword(id: any, password: string, new_password: string) {
    //     //check id user if not found id user
    //     const user = await User.findById(id);
    //     if (!user) throw new HttpException(401, UNAUTHORIZED);

    //     //check compare password old if password old wrong => error
    //     const password_old = await user.comparePassword(password);
    //     if (!password_old) throw new HttpException(400, INVALID_PASSWORD);

    //     //create password new
    //     user.password = new_password;
    //     //check password old and new password if new == old then error
    //     if (password === new_password) throw new HttpException(400, SAME_THE_CHANGE_PASSWORD);

    //     await user.hashPassword();
    //     await user.save();

    //     return user;
    // }
}
