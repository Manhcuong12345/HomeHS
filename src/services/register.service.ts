import { User } from '../models/user.model';
import { HttpException } from '../common';

export class RegisterService {
    private static instance: RegisterService;

    static getInstance(): RegisterService {
        if (!RegisterService.instance) {
            RegisterService.instance = new RegisterService();
        }
        return RegisterService.instance;
    }

    /**
     * Function resgister user data
     * @param {*} userData
     */
    async registerUser(userData: any) {
        //await this.chekingDataBeforeCreateUser(userData);
        const user = new User(userData);

        await user.hashPassword();
        await user.save();

        return user;
    }
}
