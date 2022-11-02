import { Response, Request, Router, NextFunction } from 'express';
import { Controller } from '../../common';
import { AuthService } from '../../services/auth.service';

export class AuthController implements Controller {
    private readonly baseUrl: string = '/login';
    private _router: Router;
    private readonly authService = AuthService.getInstance();

    constructor() {
        this._router = Router();
        this.initRouter();
    }

    get router() {
        return this._router;
    }

    initRouter() {
        this._router.post(this.baseUrl + '/user', this.login);
    }

    private login = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { email, password } = req.body;

            return await this.authService.login(email, password, res);
        } catch (err) {
            next(err);
        }
    };
}
