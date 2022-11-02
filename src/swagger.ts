import { any } from 'joi';

export const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            version: '1.0.0',
            title: 'Seans-TypeScript-NodeJS-CRUD-REST-API-Boilerplate',
            description:
                'A minimal and easy to follow example of what you need to create a CRUD style API in NodeJs using TypeScript',
            license: {
                name: 'MIT',
                url: 'http://localhost:3000'
            }
        }
    },
    apis: ['.src/routes.ts']

    //     openapi: '3.0.0',
    //     info: {
    //         version: '1.0.0',
    //         title: 'Seans-TypeScript-NodeJS-CRUD-REST-API-Boilerplate',
    //         description:
    //             'A minimal and easy to follow example of what you need to create a CRUD style API in NodeJs using TypeScript',
    //         license: {
    //             name: 'MIT',
    //             url: 'http://localhost:3000'
    //         }
    //     },
    //     servers: [
    //         {
    //             url: '/',
    //             description: 'Local Dev, or from Heroku'
    //         },
    //         {
    //             url: '/api/',
    //             description: 'With docker-compose and nginx proxy'
    //         }
    //     ],
    //     tags: [
    //         {
    //             name: 'Cats',
    //             description: 'API for cats in the system'
    //         }
    //     ],
    //     consumes: ['application/json'],
    //     produces: ['application/json'],
    //     paths: {
    //         '/api/users': {
    //             get: {
    //                 tags: ['Cats'],
    //                 summary: 'Get all cats in system',
    //                 responses: {
    //                     '200': {
    //                         description: 'OK',
    //                         schema: {
    //                             $ref: '#/definitions/Cats'
    //                         }
    //                     }
    //                 }
    //             },
    //             post: {
    //                 tags: ['Cats'],
    //                 summary: 'Create a new cat in system',
    //                 requestBody: {
    //                     description: 'Cat Object',
    //                     required: true,
    //                     content: {
    //                         'application/json': {
    //                             schema: {
    //                                 $ref: '#/definitions/Cat'
    //                             }
    //                         }
    //                     }
    //                 },
    //                 produces: ['application/json'],
    //                 responses: {
    //                     '200': {
    //                         description: 'OK',
    //                         schema: {
    //                             $ref: '#/definitions/id'
    //                         }
    //                     },
    //                     '400': {
    //                         description: 'Failed. Bad post data.'
    //                     }
    //                 }
    //             }
    //         },
    //         '/cats/{id}': {
    //             parameters: [
    //                 {
    //                     name: 'id',
    //                     in: 'path',
    //                     required: true,
    //                     description: 'ID of the cat that we want to match',
    //                     type: 'string'
    //                 }
    //             ],
    //             get: {
    //                 tags: ['Cats'],
    //                 summary: 'Get cat with given ID',
    //                 parameters: [
    //                     {
    //                         in: 'path',
    //                         name: 'id',
    //                         required: true,
    //                         description: 'Cat with id',
    //                         schema: {
    //                             $ref: '#/definitions/id'
    //                         }
    //                     }
    //                 ],
    //                 responses: {
    //                     '200': {
    //                         description: 'OK',
    //                         schema: {
    //                             $ref: '#/definitions/Cat'
    //                         }
    //                     },
    //                     '404': {
    //                         description: 'Failed. Cat not found.'
    //                     }
    //                 }
    //             },
    //             put: {
    //                 summary: 'Update cat with given ID',
    //                 tags: ['Cats'],
    //                 requestBody: {
    //                     description: 'Cat Object',
    //                     required: true,
    //                     content: {
    //                         'application/json': {
    //                             schema: {
    //                                 $ref: '#/definitions/Cat'
    //                             }
    //                         }
    //                     }
    //                 },
    //                 parameters: [
    //                     {
    //                         in: 'path',
    //                         name: 'id',
    //                         required: true,
    //                         description: 'Cat with new values of properties',
    //                         schema: {
    //                             $ref: '#/definitions/id'
    //                         }
    //                     }
    //                 ],
    //                 responses: {
    //                     '200': {
    //                         description: 'OK',
    //                         schema: {
    //                             $ref: '#/definitions/Cat'
    //                         }
    //                     },
    //                     '400': {
    //                         description: 'Failed. Bad post data.'
    //                     },
    //                     '404': {
    //                         description: 'Failed. Cat not found.'
    //                     }
    //                 }
    //             },
    //             delete: {
    //                 summary: 'Delete cat with given ID',
    //                 tags: ['Cats'],
    //                 parameters: [
    //                     {
    //                         in: 'path',
    //                         name: 'id',
    //                         required: true,
    //                         description: 'Delete Cat with id',
    //                         schema: {
    //                             $ref: '#/definitions/id'
    //                         }
    //                     }
    //                 ],
    //                 responses: {
    //                     '200': {
    //                         description: 'OK',
    //                         schema: {
    //                             $ref: '#/definitions/id'
    //                         }
    //                     },
    //                     '404': {
    //                         description: 'Failed. Cat not found.'
    //                     }
    //                 }
    //             }
    //         }
    //     },
    //     definitions: {
    //         id: {
    //             properties: {
    //                 uuid: {
    //                     type: 'string'
    //                 }
    //             }
    //         },
    //         Cat: {
    //             type: 'object',
    //             properties: {
    //                 genus: {
    //                     type: 'string'
    //                 },
    //                 name: {
    //                     type: 'string'
    //                 },
    //                 isHungry: {
    //                     type: 'boolean'
    //                 },
    //                 lastFedDate: {
    //                     type: 'string'
    //                 }
    //             }
    //         },
    //         Cats: {
    //             type: 'object',
    //             properties: {
    //                 cats: {
    //                     type: 'object',
    //                     additionalProperties: {
    //                         $ref: '#/definitions/Cat'
    //                     }
    //                 }
    //             }
    //         }
    //     }
    // swagger: '2.0',
    // info: {
    //     description: 'This is a sample video tutorial',
    //     version: '1.0.0',
    //     title: 'Tutorial',
    //     termsOfService: 'http://swagger.io/terms/',
    //     contact: {
    //         email: 'tutorial@gmail.com'
    //     },
    //     license: {
    //         name: 'Apache 2.0',
    //         url: 'http://www.apache.org/licenses/LICENSE-2.0.html'
    //     }
    // },
    // host: '127.0.0.1:8000',
    // basePath: '/users',
    // tags: [
    //     {
    //         name: 'Login',
    //         description: 'Everything about your Login',
    //         externalDocs: {
    //             description: 'Find out more',
    //             url: 'http://swagger.io'
    //         }
    //     },
    //     {
    //         name: 'Record',
    //         description: 'Operations about record',
    //         externalDocs: {
    //             description: 'Find out more about our store',
    //             url: 'http://swagger.io'
    //         }
    //     }
    // ],
    // //schemes: [],
    // paths: {
    //     '/login': {
    //         post: {
    //             tags: ['Login'],
    //             summary: 'Create login',
    //             description: 'This can only be done by the logged in user.',
    //             operationId: 'createLogin',
    //             produces: ['application/json'],
    //             parameters: [
    //                 {
    //                     in: 'body',
    //                     name: 'body',
    //                     description: 'Created user object',
    //                     required: true,
    //                     schema: {
    //                         $ref: '#/definitions/UserSchema'
    //                     }
    //                 }
    //             ],
    //             responses: {
    //                 default: {
    //                     description: 'successful operation'
    //                 }
    //             }
    //         }
    //     },
    //     '/addRecord': {
    //         post: {
    //             security: [
    //                 {
    //                     // Bearer: []
    //                 }
    //             ],
    //             tags: ['Record'],
    //             summary: 'Create record',
    //             description: 'This can only be done by the logged in user.',
    //             operationId: 'createrRecord',
    //             produces: ['application/json'],
    //             parameters: [
    //                 {
    //                     in: 'body',
    //                     name: 'body',
    //                     description: 'Created user Record',
    //                     required: true,
    //                     schema: {
    //                         $ref: '#/definitions/createRecord'
    //                     }
    //                 }
    //             ],
    //             responses: {
    //                 default: {
    //                     description: 'successful operation'
    //                 }
    //             }
    //         }
    //     },
    //     '/getRecord': {
    //         get: {
    //             security: [
    //                 {
    //                     // Bearer: []
    //                 }
    //             ],
    //             tags: ['Record'],
    //             summary: 'Get record',
    //             description: 'This can only be done by the logged in user.',
    //             operationId: 'getRecord',
    //             produces: ['application/json'],
    //             responses: {
    //                 default: {
    //                     description: 'successful operation'
    //                 }
    //             }
    //         }
    //     },
    //     '/updateRecord/{id}': {
    //         put: {
    //             security: [
    //                 {
    //                     // Bearer: []
    //                 }
    //             ],
    //             tags: ['Record'],
    //             summary: 'Update record',
    //             description: 'This can only be done by the logged in user.',
    //             operationId: 'updateRecord',
    //             produces: ['application/json'],
    //             parameters: [
    //                 {
    //                     in: 'path',
    //                     name: 'id',
    //                     description: 'ID of body',
    //                     required: true,
    //                     type: 'string'
    //                 },
    //                 {
    //                     in: 'body',
    //                     name: 'body',
    //                     description: 'Created user Record',
    //                     required: true,
    //                     schema: {
    //                         $ref: '#/definitions/updateRecord'
    //                     }
    //                 }
    //             ],
    //             responses: {
    //                 default: {
    //                     description: 'successful operation'
    //                 }
    //             }
    //         }
    //     }
    // },
    // securityDefinitions: {
    //     Bearer: {
    //         type: 'apiKey',
    //         name: 'Authorization',
    //         in: 'header'
    //     }
    // },
    // definitions: {
    //     Login: {
    //         type: 'object',
    //         properties: {
    //             name: {
    //                 type: 'string'
    //             },
    //             password: {
    //                 type: 'string'
    //             }
    //         },
    //         xml: {
    //             name: 'User'
    //         }
    //     },
    //     createRecord: {
    //         type: 'object',
    //         properties: {
    //             name: {
    //                 type: 'string'
    //             },
    //             email: {
    //                 type: 'string'
    //             },
    //             city: {
    //                 type: 'string'
    //             }
    //         },
    //         xml: {
    //             name: 'User'
    //         }
    //     },
    //     updateRecord: {
    //         type: 'object',
    //         properties: {
    //             name: {
    //                 type: 'string'
    //             },
    //             email: {
    //                 type: 'string'
    //             },
    //             city: {
    //                 type: 'string'
    //             }
    //         },
    //         xml: {
    //             name: 'User'
    //         }
    //     }
    // },
    // externalDocs: {
    //     description: 'Find out more about Swagger',
    //     url: 'http://swagger.io'
    // }
};
