import { Category } from './../models/category.model';
import { CommentAdd } from '../models/comment.model';
import { User } from '../models/user.model';
import { Posts } from '../models/article.model';
import { pick } from 'lodash';
import { HttpException } from '../common';
import { UNAUTHORIZED } from '../common/constants/err.constants';

export class ArticleService {
    private static instance: ArticleService;

    static getInstance(): ArticleService {
        if (!ArticleService.instance) {
            ArticleService.instance = new ArticleService();
        }
        return ArticleService.instance;
    }

    /**
     *Function create user
     * @param {*} articletData
     * @param {*} user
     * @returns
     */
    async create(articletData: any, user: any) {
        const authorData = await User.findById(user._id).select({ _id: 1, name: 1, email: 1, address: 1, role: 1 });
        if (!authorData)
            throw new HttpException(401, { error_code: '401', error_message: 'unauthorized create article' });

        const categoriesData = await Category.findById(articletData.category);

        articletData.author = authorData;
        articletData.category = categoriesData;

        let article = new Posts(articletData);
        await article.save();

        return article;
    }

    /**
     * Function used to create filters
     * help filter data based on user data and user submitted data (search_string)
     *
     * @param {*} search_string
     * @param {*} article
     * @returns
     */
    // getFilter(search_string: string, user: any) {
    //     let filter: any = {};
    //     return filter;
    // }

    /**
     * Function used to get data of all users and pagination
     *
     * @param {*} param0
     * @param {*} article
     * @returns
     */
    async getAllUsersAndPaging(
        { page, limit, search_string }: { page?: number; limit?: number; search_string?: string },
        user: any
    ) {
        if (!page || page <= 0) {
            page = 1;
        }
        if (!limit) {
            limit = 10;
        }
        let skip = 0;
        skip = (page - 1) * limit;

        let filter: any = {};

        const users = await Posts.find(filter).skip(skip).limit(limit);

        const documentCount = await Posts.countDocuments(filter);

        const response = {
            data: users,
            meta_data: {
                total_records: documentCount,
                page: page,
                limit: limit,
                total_page: Math.ceil(documentCount / Number(limit))
            }
        };

        return response;
    }

    /**
     * Function to get user data by token
     *
     * @param {*} article
     * @return
     */
    // async getMe(user: any) {
    //     const me = await User.findById(user._id).select('-password');
    //     if (!me) throw new HttpException(404, USER_NOT_FOUND);

    //     return me;
    // }

    /**
     * Function get id of user data
     *
     * @param {*} id
     * @param {*} article
     * @return
     */
    async getArticleById(id: string) {
        const article = await Posts.findById(id);
        if (!article) throw new HttpException(404, { error_code: '404', error_message: 'Posts is not found' });

        return article;
    }

    /**
     * Function update user data
     *
     * @param {*} articleData
     * @param {*} id
     * @param {*} article
     * @return
     *
     */
    async updateArticle(id: any, articleData: any, user: any) {
        const postId = await Posts.findById(id);
        if (!postId) throw new HttpException(404, { error_code: '404', error_message: 'Posts is not found' });

        if (postId.author._id.toString() !== user._id)
            throw new HttpException(404, { error_code: '404', error_message: 'Not authorized to update this post' });

        const article = await Posts.findByIdAndUpdate(id, articleData, { new: true });
        if (!article) throw new HttpException(404, { error_code: '404', error_message: 'Posts is not found' });

        return article;
    }

    /**
     * Function delete user data
     *
     * @param {*} id
     * @param {*} article
     * @return
     */
    async deleteArticle(id: string, user: any) {
        const postId = await Posts.findById(id);

        if (postId.author._id.toString() !== user._id)
            throw new HttpException(404, { error_code: '404', error_message: 'Not authorized to delete this post' });

        const comment = await Posts.findByIdAndDelete(id);
        if (!comment) throw new HttpException(400, { error_code: '404', error_message: 'Posts is not found' });

        return comment;
    }
}
