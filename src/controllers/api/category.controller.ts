import { NextFunction, Request, Response, Router } from 'express';
import { CategoryService } from '../../services/category.service';
import { Controller } from '../../common';
import { auth } from '../../middlewares/auth.middleware';
import { authorize } from '../../middlewares/authorize.middleware';

export class CategoryController implements Controller {
    private readonly baseUrl: string = '/categories';
    private _router: Router;
    private readonly categoryService = CategoryService.getInstance();

    get router(): Router {
        return this._router;
    }

    constructor() {
        this._router = Router();
        this.initRouter();
    }

    private initRouter(): void {
        this._router.post(this.baseUrl, auth, authorize(['admin']), this.create);
        this._router.get(this.baseUrl, auth, this.getAll);
        this._router.get(this.baseUrl + '/:id', auth, authorize(['admin']), this.getById);
        this._router.put(this.baseUrl + '/:id', auth, authorize(['admin']), this.updateData);
        this._router.delete(this.baseUrl + '/:id', auth, authorize(['admin']), this.deleteData);
    }

    private create = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const categoryData = req.body;

            res.send(await this.categoryService.create(categoryData));
        } catch (err) {
            next(err);
        }
    };

    private getAll = async (req: Request, res: Response, next: NextFunction) => {
        try {
            res.send(await this.categoryService.getAll());
        } catch (err) {
            next(err);
        }
    };

    private getById = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { id } = req.params;
            res.send(await this.categoryService.getById(id));
        } catch (err) {
            next(err);
        }
    };

    private updateData = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { id } = req.params;
            const categoryData = req.body;

            res.send(await this.categoryService.update(id, categoryData));
        } catch (err) {
            next(err);
        }
    };

    private deleteData = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { id } = req.params;
            res.send(await this.categoryService.delete(id));
        } catch (err) {
            next(err);
        }
    };
}
