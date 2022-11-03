import { any } from 'joi';

export const options = {
    definition: {
        swagger: '2.0',
        info: {
            version: '1.0',
            title: 'Blog-Mongo-typeScript-Nodejs',
            contact: {}
        },
        host: 'localhost:3000',
        basePath: '/api',
        securityDefinitions: {},
        schemes: ['http'],
        consumes: ['application/json'],
        produces: ['application/json'],
        paths: {
            '/login/user': {
                post: {
                    summary: 'Login user',
                    tags: ['Login'],
                    operationId: 'Loginuser',
                    deprecated: false,
                    produces: ['application/json'],
                    parameters: [
                        {
                            name: 'Body',
                            in: 'body',
                            required: true,
                            description: '',
                            schema: {
                                $ref: '#/definitions/LoginuserRequest'
                            }
                        }
                    ],
                    responses: {
                        '200': {
                            description: '',
                            headers: {}
                        }
                    }
                }
            },
            '/user': {
                post: {
                    summary: 'Create user(only admin)',
                    tags: ['User'],
                    operationId: 'Createuser(onlyadmin)',
                    deprecated: false,
                    produces: ['application/json'],
                    parameters: [
                        {
                            name: 'Body',
                            in: 'body',
                            required: true,
                            description: '',
                            schema: {
                                $ref: '#/definitions/Createuser%28onlyadmin%29Request'
                            }
                        }
                    ],
                    responses: {
                        '200': {
                            description: '',
                            headers: {}
                        }
                    }
                },
                get: {
                    summary: 'Get all users and paging(only admin)',
                    tags: ['User'],
                    operationId: 'Getallusersandpaging(onlyadmin)',
                    deprecated: false,
                    produces: ['application/json'],
                    parameters: [
                        {
                            name: 'x-auth-token',
                            in: 'header',
                            required: true,
                            type: 'string',
                            description: ''
                        }
                    ],
                    responses: {
                        '200': {
                            description: '',
                            headers: {}
                        }
                    }
                }
            },
            '/user/{id}': {
                get: {
                    summary: 'Get user by id(only admin)',
                    tags: ['User'],
                    operationId: 'Getuserbyid(onlyadmin)',
                    deprecated: false,
                    produces: ['application/json'],
                    parameters: [
                        {
                            name: 'id',
                            in: 'path',
                            required: true,
                            type: 'string',
                            description: '(Required) ID'
                        },
                        {
                            name: 'x-auth-token',
                            in: 'header',
                            required: true,
                            type: 'string',
                            description: ''
                        }
                    ],
                    responses: {
                        '200': {
                            description: '',
                            headers: {}
                        }
                    }
                },
                put: {
                    summary: 'Update user by id(only admin)',
                    tags: ['User'],
                    operationId: 'Updateuserbyid(onlyadmin)',
                    deprecated: false,
                    produces: ['application/json'],
                    parameters: [
                        {
                            name: 'id',
                            in: 'path',
                            required: true,
                            type: 'string',
                            description: '(Required) ID'
                        },
                        {
                            name: 'x-auth-token',
                            in: 'header',
                            required: true,
                            type: 'string',
                            description: ''
                        },
                        {
                            name: 'Body',
                            in: 'body',
                            required: true,
                            description: '',
                            schema: {
                                $ref: '#/definitions/Updateuserbyid%28onlyadmin%29Request'
                            }
                        }
                    ],
                    responses: {
                        '200': {
                            description: '',
                            headers: {}
                        }
                    }
                },
                delete: {
                    summary: 'Delete user(only admin)',
                    tags: ['User'],
                    operationId: 'Deleteuser(onlyadmin)',
                    deprecated: false,
                    produces: ['application/json'],
                    parameters: [
                        {
                            name: 'id',
                            in: 'path',
                            required: true,
                            type: 'string',
                            description: '(Required) ID'
                        },
                        {
                            name: 'x-auth-token',
                            in: 'header',
                            required: true,
                            type: 'string',
                            description: ''
                        }
                    ],
                    responses: {
                        '200': {
                            description: '',
                            headers: {}
                        }
                    }
                }
            },
            '/registers/user': {
                post: {
                    summary: 'Register user',
                    tags: ['Register'],
                    operationId: 'Registeruser',
                    deprecated: false,
                    produces: ['application/json'],
                    parameters: [
                        {
                            name: 'Body',
                            in: 'body',
                            required: true,
                            description: '',
                            schema: {
                                $ref: '#/definitions/RegisteruserRequest'
                            }
                        }
                    ],
                    responses: {
                        '200': {
                            description: '',
                            headers: {}
                        }
                    }
                }
            },
            '/categories': {
                post: {
                    summary: 'Create category(only admin)',
                    tags: ['Category'],
                    operationId: 'Createcategory(onlyadmin)',
                    deprecated: false,
                    produces: ['application/json'],
                    parameters: [
                        {
                            name: 'x-auth-token',
                            in: 'header',
                            required: true,
                            type: 'string',
                            description: ''
                        },
                        {
                            name: 'Body',
                            in: 'body',
                            required: true,
                            description: '',
                            schema: {
                                $ref: '#/definitions/Createcategory%28onlyadmin%29Request'
                            }
                        }
                    ],
                    responses: {
                        '200': {
                            description: '',
                            headers: {}
                        }
                    }
                },
                get: {
                    summary: 'Get all category and paging(only admin)',
                    tags: ['Category'],
                    operationId: 'Getallcategoryandpaging(onlyadmin)',
                    deprecated: false,
                    produces: ['application/json'],
                    parameters: [
                        {
                            name: 'x-auth-token',
                            in: 'header',
                            required: true,
                            type: 'string',
                            description: ''
                        }
                    ],
                    responses: {
                        '200': {
                            description: '',
                            headers: {}
                        }
                    }
                }
            },
            '/categories/{id}': {
                get: {
                    summary: 'Get category by id(only admin)',
                    tags: ['Category'],
                    operationId: 'Getcategorybyid(onlyadmin)',
                    deprecated: false,
                    produces: ['application/json'],
                    parameters: [
                        {
                            name: 'id',
                            in: 'path',
                            required: true,
                            type: 'string',
                            description: '(Required) ID'
                        },
                        {
                            name: 'x-auth-token',
                            in: 'header',
                            required: true,
                            type: 'string',
                            description: ''
                        }
                    ],
                    responses: {
                        '200': {
                            description: '',
                            headers: {}
                        }
                    }
                },
                put: {
                    summary: 'Update category by id(only admin)',
                    tags: ['Category'],
                    operationId: 'Updatecategorybyid(onlyadmin)',
                    deprecated: false,
                    produces: ['application/json'],
                    parameters: [
                        {
                            name: 'id',
                            in: 'path',
                            required: true,
                            type: 'string',
                            description: '(Required) ID'
                        },
                        {
                            name: 'x-auth-token',
                            in: 'header',
                            required: true,
                            type: 'string',
                            description: ''
                        },
                        {
                            name: 'Body',
                            in: 'body',
                            required: true,
                            description: '',
                            schema: {
                                $ref: '#/definitions/Updatecategorybyid%28onlyadmin%29Request'
                            }
                        }
                    ],
                    responses: {
                        '200': {
                            description: '',
                            headers: {}
                        }
                    }
                },
                delete: {
                    summary: 'Delete category(only admin)',
                    tags: ['Category'],
                    operationId: 'Deletecategory(onlyadmin)',
                    deprecated: false,
                    produces: ['application/json'],
                    parameters: [
                        {
                            name: 'id',
                            in: 'path',
                            required: true,
                            type: 'string',
                            description: '(Required) ID'
                        },
                        {
                            name: 'x-auth-token',
                            in: 'header',
                            required: true,
                            type: 'string',
                            description: ''
                        }
                    ],
                    responses: {
                        '200': {
                            description: '',
                            headers: {}
                        }
                    }
                }
            },
            '/comments': {
                post: {
                    summary: 'Add comments(only user)',
                    tags: ['Comments'],
                    operationId: 'Addcomments(onlyuser)',
                    deprecated: false,
                    produces: ['application/json'],
                    parameters: [
                        {
                            name: 'x-auth-token',
                            in: 'header',
                            required: true,
                            type: 'string',
                            description: ''
                        },
                        {
                            name: 'Body',
                            in: 'body',
                            required: true,
                            description: '',
                            schema: {
                                $ref: '#/definitions/Addcomments%28onlyuser%29Request'
                            }
                        }
                    ],
                    responses: {
                        '200': {
                            description: '',
                            headers: {}
                        }
                    }
                },
                get: {
                    summary: 'Get all comments',
                    tags: ['Comments'],
                    operationId: 'Getallcomments',
                    deprecated: false,
                    produces: ['application/json'],
                    parameters: [
                        {
                            name: 'x-auth-token',
                            in: 'header',
                            required: true,
                            type: 'string',
                            description: ''
                        }
                    ],
                    responses: {
                        '200': {
                            description: '',
                            headers: {}
                        }
                    }
                }
            },
            '/comments/{id}': {
                get: {
                    summary: 'Get by comments id',
                    tags: ['Comments'],
                    operationId: 'Getbycommentsid',
                    deprecated: false,
                    produces: ['application/json'],
                    parameters: [
                        {
                            name: 'id',
                            in: 'path',
                            required: true,
                            type: 'string',
                            description: '(Required) ID'
                        },
                        {
                            name: 'x-auth-token',
                            in: 'header',
                            required: true,
                            type: 'string',
                            description: ''
                        }
                    ],
                    responses: {
                        '200': {
                            description: '',
                            headers: {}
                        }
                    }
                },
                put: {
                    summary: 'Update comments by id',
                    tags: ['Comments'],
                    operationId: 'Updatecommentsbyid',
                    deprecated: false,
                    produces: ['application/json'],
                    parameters: [
                        {
                            name: 'id',
                            in: 'path',
                            required: true,
                            type: 'string',
                            description: '(Required) ID'
                        },
                        {
                            name: 'x-auth-token',
                            in: 'header',
                            required: true,
                            type: 'string',
                            description: ''
                        },
                        {
                            name: 'Body',
                            in: 'body',
                            required: true,
                            description: '',
                            schema: {
                                $ref: '#/definitions/UpdatecommentsbyidRequest'
                            }
                        }
                    ],
                    responses: {
                        '200': {
                            description: '',
                            headers: {}
                        }
                    }
                },
                delete: {
                    summary: 'Delete comments by id',
                    tags: ['Comments'],
                    operationId: 'Deletecommentsbyid',
                    deprecated: false,
                    produces: ['application/json'],
                    parameters: [
                        {
                            name: 'id',
                            in: 'path',
                            required: true,
                            type: 'string',
                            description: '(Required) ID'
                        },
                        {
                            name: 'x-auth-token',
                            in: 'header',
                            required: true,
                            type: 'string',
                            description: ''
                        }
                    ],
                    responses: {
                        '200': {
                            description: '',
                            headers: {}
                        }
                    }
                }
            },
            '/posts': {
                post: {
                    summary: 'Create posts(only user)',
                    tags: ['Posts'],
                    operationId: 'Createposts(onlyuser)',
                    deprecated: false,
                    produces: ['application/json'],
                    parameters: [
                        {
                            name: 'x-auth-token',
                            in: 'header',
                            required: true,
                            type: 'string',
                            description: ''
                        },
                        {
                            name: 'Body',
                            in: 'body',
                            required: true,
                            description: '',
                            schema: {
                                $ref: '#/definitions/Createposts%28onlyuser%29Request'
                            }
                        }
                    ],
                    responses: {
                        '200': {
                            description: '',
                            headers: {}
                        }
                    }
                },
                get: {
                    summary: 'Get all posts',
                    tags: ['Posts'],
                    operationId: 'Getallposts',
                    deprecated: false,
                    produces: ['application/json'],
                    parameters: [
                        {
                            name: 'x-auth-token',
                            in: 'header',
                            required: true,
                            type: 'string',
                            description: ''
                        }
                    ],
                    responses: {
                        '200': {
                            description: '',
                            headers: {}
                        }
                    }
                }
            },
            '/posts/{id}': {
                get: {
                    summary: 'Get by posts id',
                    tags: ['Posts'],
                    operationId: 'Getbypostsid',
                    deprecated: false,
                    produces: ['application/json'],
                    parameters: [
                        {
                            name: 'id',
                            in: 'path',
                            required: true,
                            type: 'string',
                            description: '(Required) ID'
                        },
                        {
                            name: 'x-auth-token',
                            in: 'header',
                            required: true,
                            type: 'string',
                            description: ''
                        }
                    ],
                    responses: {
                        '200': {
                            description: '',
                            headers: {}
                        }
                    }
                },
                delete: {
                    summary: 'Delete posts by id(only user)',
                    tags: ['Posts'],
                    operationId: 'Deletepostsbyid(onlyuser)',
                    deprecated: false,
                    produces: ['application/json'],
                    parameters: [
                        {
                            name: 'id',
                            in: 'path',
                            required: true,
                            type: 'string',
                            description: '(Required) ID'
                        },
                        {
                            name: 'x-auth-token',
                            in: 'header',
                            required: true,
                            type: 'string',
                            description: ''
                        }
                    ],
                    responses: {
                        '200': {
                            description: '',
                            headers: {}
                        }
                    }
                }
            }
        },
        definitions: {
            LoginuserRequest: {
                title: 'LoginuserRequest',
                example: {
                    email: 'cuong@gmail.com',
                    password: '123'
                },
                type: 'object',
                properties: {
                    email: {
                        type: 'string'
                    },
                    password: {
                        type: 'string'
                    }
                },
                required: ['email', 'password']
            },
            'Createuser(onlyadmin)Request': {
                title: 'Createuser(onlyadmin)Request',
                example: {
                    name: 'doan',
                    email: 'doan122@gmail.com',
                    password: '123',
                    address: 'quang ninh',
                    phoneNumber: '098999163',
                    gender: 'female'
                },
                type: 'object',
                properties: {
                    name: {
                        type: 'string'
                    },
                    email: {
                        type: 'string'
                    },
                    password: {
                        type: 'string'
                    },
                    address: {
                        type: 'string'
                    },
                    phoneNumber: {
                        type: 'string'
                    },
                    gender: {
                        type: 'string'
                    }
                },
                required: ['name', 'email', 'password', 'address', 'phoneNumber', 'gender']
            },
            'Updateuserbyid(onlyadmin)Request': {
                title: 'Updateuserbyid(onlyadmin)Request',
                example: {
                    name: 'cuong do',
                    phoneNumber: '0868965433'
                },
                type: 'object',
                properties: {
                    name: {
                        type: 'string'
                    },
                    phoneNumber: {
                        type: 'string'
                    }
                },
                required: ['name', 'phoneNumber']
            },
            RegisteruserRequest: {
                title: 'RegisteruserRequest',
                example: {
                    name: 'cuong',
                    email: 'cuong@gmail.com',
                    password: '$2a$11$gEwb4jDabHFtdBAq6eLZ2eCqDDZmKp3LxZitBC5UNR2oer1MDSMkS',
                    role: 'Admin',
                    address: 'nha trang,vinh hai',
                    phoneNumber: '086574563',
                    gender: 'male'
                },
                type: 'object',
                properties: {
                    name: {
                        type: 'string'
                    },
                    email: {
                        type: 'string'
                    },
                    password: {
                        type: 'string'
                    },
                    role: {
                        type: 'string'
                    },
                    address: {
                        type: 'string'
                    },
                    phoneNumber: {
                        type: 'string'
                    },
                    gender: {
                        type: 'string'
                    }
                },
                required: ['name', 'email', 'password', 'role', 'address', 'phoneNumber', 'gender']
            },
            'Createcategory(onlyadmin)Request': {
                title: 'Createcategory(onlyadmin)Request',
                example: {
                    name: 'Blog về tình sâdasdasd.'
                },
                type: 'object',
                properties: {
                    name: {
                        type: 'string'
                    }
                },
                required: ['name']
            },
            'Updatecategorybyid(onlyadmin)Request': {
                title: 'Updatecategorybyid(onlyadmin)Request',
                example: {
                    name: 'Blog về đời thường'
                },
                type: 'object',
                properties: {
                    name: {
                        type: 'string'
                    }
                },
                required: ['name']
            },
            'Addcomments(onlyuser)Request': {
                title: 'Addcomments(onlyuser)Request',
                example: {
                    bodyText: 'Bai viet kha la hay',
                    articleId: '636224a0c59e7e535c354874'
                },
                type: 'object',
                properties: {
                    bodyText: {
                        type: 'string'
                    },
                    articleId: {
                        type: 'string'
                    }
                },
                required: ['bodyText', 'articleId']
            },
            UpdatecommentsbyidRequest: {
                title: 'UpdatecommentsbyidRequest',
                example: {
                    bodyText: 'Bai viet rat hay'
                },
                type: 'object',
                properties: {
                    bodyText: {
                        type: 'string'
                    }
                },
                required: ['bodyText']
            },
            'Createposts(onlyuser)Request': {
                title: 'Createposts(onlyuser)Request',
                example: {
                    title: 'Giải oan cho người “Hướng Nội”.',
                    body: 'Người Hướng Nội chỉ đơn giản là những người có xu hướng tập trung vào bên trong bản thân. Họ không quá thích việc giao lưu, giao tiếp. Họ thoải mái khi ở một mình hoặc ở bên cạnh những người thân thiết. Vậy thì phải làm rõ, người hướng nội không thích việc giao tiếp, chứ không phải họ kém giao tiếp. 2 việc đó khác nhau hoàn toàn, một cái nói về sở thích, một cái nói về khả năng. Tất nhiên, người nào thích giao tiếp thì sẽ có nhiều cơ hội hơn để giỏi giao tiếp, nhưng không thể đánh đồng 2 việc đó với nhau.Người hướng ngoại thích giao tiếp, thích những chỗ đông người, nhưng không có nghĩa là họ giao tiếp giỏi. Rất nhiều người hướng ngoại nhưng cứ tơn tớn lên, vô duyên hoặc không khéo léo.',
                    category: '6361fdd71afdaf4028076006'
                },
                type: 'object',
                properties: {
                    title: {
                        type: 'string'
                    },
                    body: {
                        type: 'string'
                    },
                    category: {
                        type: 'string'
                    }
                },
                required: ['title', 'body', 'category']
            },
            'Updatepostsbyid(onlyuser)Request': {
                title: 'Updatepostsbyid(onlyuser)Request',
                example: {
                    bodyText: 'Bí quyết đột phá kỹ năng VIẾT'
                },
                type: 'object',
                properties: {
                    bodyText: {
                        type: 'string'
                    }
                },
                required: ['bodyText']
            }
        },
        tags: [
            {
                name: 'Login'
            },
            {
                name: 'User'
            },
            {
                name: 'Register'
            },
            {
                name: 'Category'
            },
            {
                name: 'Comments'
            },
            {
                name: 'Posts'
            }
        ]
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
