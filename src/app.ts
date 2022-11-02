import express from 'express';
import { config } from './config/config';
import { errorMiddleware, Controller } from './common';
import { initRouter } from './routes/api';
import { connectDatabase } from './databases/mongodb';
import swaggerUi from 'swagger-ui-express';
import * as swaggerDocument from './swagger';
import swaggerJSDoc from 'swagger-jsdoc';
import { options } from './swagger';
// import path from 'path';

export class App {
    private app: express.Application;

    constructor() {
        this.app = express();
        this.app.use(express.json());
        this.app.use(
            express.urlencoded({
                extended: true
            })
        );
    }

    private async connectDatabase() {
        await connectDatabase();
    }

    private logger() {}

    private cronJob() {}

    private initRouter(): void {
        this.app.use(function (req, res, next) {
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Methods', '*');
            res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-auth-token');
            res.header('Access-Control-Expose-Headers', 'x-auth-token');
            next();
        });

        initRouter(this.app);
        this.initializeErrorHandling();
        this.swaggers();
    }

    private initializeErrorHandling() {
        this.app.use(errorMiddleware);
    }

    private swaggers() {
        const specs = swaggerJSDoc(options);
        this.app.use('/docsApi', swaggerUi.serve, swaggerUi.setup(specs));
    }

    async start() {
        await this.connectDatabase();
        this.cronJob();
        this.initRouter();
    }

    async listen(port: number, callback?: () => void): Promise<void> {
        await this.app.listen(port, callback);
    }
}
