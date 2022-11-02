import { ArticleService } from './../../services/article.service';
import { NextFunction, Request, Response, Router } from 'express';
import { Controller } from '../../common';
import { auth } from '../../middlewares/auth.middleware';
import { authorize } from '../../middlewares/authorize.middleware';

export class ArticleController implements Controller {
    private readonly baseUrl: string = '/posts';
    private _router: Router;
    private readonly articleService = ArticleService.getInstance();

    get router(): Router {
        return this._router;
    }

    constructor() {
        this._router = Router();
        this.initRouter();
    }

    private initRouter(): void {
        this._router.post(this.baseUrl, auth, authorize(['user']), this.create);
        this._router.get(this.baseUrl, auth, this.getAll);
        this._router.get(this.baseUrl + '/:id', auth, this.getById);
        this._router.put(this.baseUrl + '/:id', auth, authorize(['user']), this.updateData);
        this._router.delete(this.baseUrl + '/:id', auth, authorize(['user']), this.deleteData);
    }

    private create = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const articleData = req.body;
            const { user } = req;

            res.send(await this.articleService.create(articleData, user));
        } catch (err) {
            next(err);
        }
    };

    private getAll = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { user, query } = req;
            res.send(await this.articleService.getAllUsersAndPaging(query, user));
        } catch (err) {
            next(err);
        }
    };

    private getById = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { id } = req.params;
            res.send(await this.articleService.getArticleById(id));
        } catch (err) {
            next(err);
        }
    };

    private updateData = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { id } = req.params;
            const articleData = req.body;
            const { user } = req;

            res.send(await this.articleService.updateArticle(id, articleData, user));
        } catch (err) {
            next(err);
        }
    };

    private deleteData = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { id } = req.params;
            const { user } = req;
            res.send(await this.articleService.deleteArticle(id, user));
        } catch (err) {
            next(err);
        }
    };
}
