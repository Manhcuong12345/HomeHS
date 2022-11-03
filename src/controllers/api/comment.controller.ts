import { NextFunction, Request, Response, Router } from 'express';
import { CommentService } from '../../services/comment.service';
import { Controller } from '../../common';
import { auth } from '../../middlewares/auth.middleware';
import { authorize } from '../../middlewares/authorize.middleware';

export class CommentController implements Controller {
    private readonly baseUrl: string = '/comments';
    private _router: Router;
    private readonly commentService = CommentService.getInstance();

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
        this._router.get(this.baseUrl + '/:id', this.getById);
        this._router.get(this.baseUrl + '/posts/:id', auth, this.getPostIdComments);
        this._router.put(this.baseUrl + '/:id', auth, authorize(['user']), this.updateData);
        this._router.delete(this.baseUrl + '/:id', auth, authorize(['user']), this.deleteData);
    }

    private create = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const commentData = req.body;
            const { user } = req;

            res.send(await this.commentService.createComment(commentData, user));
        } catch (err) {
            next(err);
        }
    };

    private getAll = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { user, query } = req;

            res.send(await this.commentService.getAllCommentAndPaging(query, user));
        } catch (err) {
            next(err);
        }
    };

    private getPostIdComments = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { id } = req.params;

            res.send(await this.commentService.getDataCommentToPost(id));
        } catch (err) {
            next(err);
        }
    };

    private getById = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { id } = req.params;
            res.send(await this.commentService.getCommentById(id));
        } catch (err) {
            next(err);
        }
    };

    private updateData = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { id } = req.params;
            const commentData = req.body;
            const { user } = req;

            res.send(await this.commentService.updateComment(id, commentData, user));
        } catch (err) {
            next(err);
        }
    };

    private deleteData = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { id } = req.params;
            const { user } = req;

            res.send(await this.commentService.deleteComment(id, user));
        } catch (err) {
            next(err);
        }
    };
}
