import express from 'express';
import { Controller } from '../common';
import {
    AuthController,
    CategoryController,
    RegisterController,
    UserController,
    CommentController,
    ArticleController
    // AppController,
} from '../controllers';

export function initRouter(app: express.Application) {
    const controllers: Controller[] = [
        new AuthController(),
        new CategoryController(),
        new RegisterController(),
        new UserController(),
        new CommentController(),
        new ArticleController()
    ];
    app.use(
        '/api',
        controllers.map((controller) => controller.router)
    );
}
