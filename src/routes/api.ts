import express from 'express';
import { Controller } from '../common';
import {
    AuthController,
    CategoryController,
    RegisterController,
    UserController
    // AppController,
} from '../controllers';

export function initRouter(app: express.Application) {
    const controllers: Controller[] = [
        new AuthController(),
        new CategoryController(),
        new RegisterController(),
        new UserController()
    ];
    app.use(
        '/api',
        controllers.map((controller) => controller.router)
    );
}
