import { any } from 'joi';

export const options = {
    definition: {
        swagger: '2.0',
        info: {
            version: '1.0',
            title: 'Blog-Mongo-typeScript-Nodejs',
            contact: {}
        },
        host: 'testhomesv.herokuapp.com',
        basePath: '/api',
        securityDefinitions: {
            apiKey: {
                type: 'apiKey',
                name: 'apikey',
                in: 'header'
            }
        },
        schemes: ['https', 'http'],
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
                                $ref: '#/definitions/Createuser%28onlyadmin%29Request'
                            }
                        }
                    ],
                    responses: {
                        '200': {
                            description: '',
                            headers: {}
                        }
                    },
                    security: [
                        {
                            apiKey: {}
                        }
                    ]
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
                    summary: 'Get All',
                    tags: ['Comments'],
                    operationId: 'GetAll',
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
            '/comments/posts/{id}': {
                get: {
                    summary: 'Get all comments to posts',
                    tags: ['Comments'],
                    operationId: 'Getallcommentstoposts',
                    deprecated: false,
                    produces: ['application/json'],
                    parameters: [
                        {
                            name: 'id',
                            in: 'path',
                            required: true,
                            type: 'string',
                            description: '(Required) PostsId Value'
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
                    tags: ['Articles'],
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
                    tags: ['Articles'],
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
                    tags: ['Articles'],
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
                put: {
                    summary: 'Update posts by id(only user)',
                    tags: ['Articles'],
                    operationId: 'Updatepostsbyid(onlyuser)',
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
                                $ref: '#/definitions/Updatepostsbyid%28onlyuser%29Request'
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
                    summary: 'Delete posts by id(only user)',
                    tags: ['Articles'],
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
                    email: 'tien@gmail.com',
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
                    gender: 'female',
                    role: ''
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
                    },
                    role: {
                        type: 'string'
                    }
                },
                required: ['name', 'email', 'password', 'address', 'phoneNumber', 'gender', 'role']
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
                    name: 'duyen',
                    email: 'duyen@gmail.com',
                    password: '123',
                    address: 'hai phong',
                    phoneNumber: '088911163',
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
                    articlesId: '636224a0c59e7e535c354874'
                },
                type: 'object',
                properties: {
                    bodyText: {
                        type: 'string'
                    },
                    articlesId: {
                        type: 'string'
                    }
                },
                required: ['bodyText', 'articlesId']
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
        security: {},
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
                name: 'Articles'
            }
        ]
    },
    apis: ['.src/routes.ts']
};
