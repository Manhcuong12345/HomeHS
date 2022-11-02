import { Response, Request, Router, NextFunction } from 'express';
import { Controller } from '../../common';
import { User } from '../../models/user.model';
import { RegisterService } from '../../services/register.service';

export class RegisterController implements Controller {
    private readonly baseUrl: string = '/registers';
    private _router: Router;
    private readonly registerService = RegisterService.getInstance();

    constructor() {
        this._router = Router();
        this.initRouter();
    }

    get router() {
        return this._router;
    }

    initRouter() {
        this._router.post(this.baseUrl + '/user', this.registerUser);
    }

    private registerUser = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const userData = req.body;

            res.send(await this.registerService.registerUser(userData));
        } catch (err) {
            next(err);
        }
    };
}
