import { Response, Request, Router, NextFunction } from 'express';
import { Controller } from '../../common';
import { UserService } from '../../services/user.service';
import { auth } from '../../middlewares/auth.middleware';
import { authorize } from '../../middlewares/authorize.middleware';

export class UserController implements Controller {
    private readonly baseUrl: string = '/user';
    private _router: Router;
    private readonly userService = UserService.getInstance();

    constructor() {
        this._router = Router();
        this.initRouter();
    }

    get router() {
        return this._router;
    }

    initRouter() {
        this._router.post(this.baseUrl, auth, authorize(['admin']), this.createUser);
        // this._router.get(this.baseUrl + '/me', auth, authorize(['user']), this.getMe);
        this._router.get(this.baseUrl, auth, authorize(['admin']), this.getAll);
        this._router.get(this.baseUrl + '/:id', auth, authorize(['admin']), this.getUserById);
        // this._router.put(this.baseUrl + '/me/change-password', auth, authorize(['user']), this.changePassword);
        // this._router.put(this.baseUrl + '/me', auth, authorize(['user']), this.updateMe);
        this._router.put(this.baseUrl + '/:id', auth, authorize(['admin']), this.updateUser);
        this._router.delete(this.baseUrl + '/:id', auth, authorize(['admin']), this.deleteUser);
    }

    private createUser = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const userData = req.body;

            res.send(await this.userService.createUser(userData));
        } catch (err) {
            next(err);
        }
    };

    // private getMe = async (req: Request, res: Response, next: NextFunction) => {
    //     try {
    //         const { user } = req;

    //         res.send(await this.userService.getMe(user));
    //     } catch (err) {
    //         next(err);
    //     }
    // };

    private getUserById = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { id } = req.params;
            // const { user } = req;

            res.send(await this.userService.getUserById(id));
        } catch (err) {
            next(err);
        }
    };

    private getAll = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { user, query } = req;

            res.send(await this.userService.getAllUsersAndPaging(query, user));
        } catch (err) {
            next(err);
        }
    };

    // private updateMe = async (req: Request, res: Response, next: NextFunction) => {
    //     try {
    //         const { user } = req;
    //         const userData = req.body;

    //         res.send(await this.userService.updateUser(user._id, userData, user));
    //     } catch (err) {
    //         next(err);
    //     }
    // };

    private updateUser = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { id } = req.params;
            const userData = req.body;
            // const { user } = req;

            res.send(await this.userService.updateUser(id, userData));
        } catch (err) {
            next(err);
        }
    };

    // private changePassword = async (req: Request, res: Response, next: NextFunction) => {
    //     try {
    //         const { password, new_password } = req.body;

    //         const { user } = req;

    //         res.send(await this.userService.changePassword(user._id, password, new_password));
    //     } catch (err) {
    //         next(err);
    //     }
    // };

    private deleteUser = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { id } = req.params;
            const { user } = req;

            res.send(await this.userService.deleteUser(id, user));
        } catch (err) {
            next(err);
        }
    };
}
