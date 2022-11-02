import { CommentAdd } from '../models/comment.model';
import { User } from '../models/user.model';
import { Posts } from '../models/article.model';
import { pick } from 'lodash';
import { HttpException } from '../common';
import { USER_NOT_FOUND } from '../common/constants/err.constants';

export class CommentService {
    private static instance: CommentService;

    static getInstance(): CommentService {
        if (!CommentService.instance) {
            CommentService.instance = new CommentService();
        }
        return CommentService.instance;
    }

    /**
     *Function create user
     * @param {*} commentData
     * @returns
     */
    async createComment(commentData: any, user: any) {
        const authorIds = await User.findById(user._id).select({ _id: 1, name: 1, email: 1 });
        if (!authorIds)
            throw new HttpException(401, { error_code: '401', error_message: 'unauthorized create article' });

        const articleData = await Posts.findById(commentData.articleId);

        commentData.authorId = authorIds;
        commentData.articleId = articleData;

        const comment = new CommentAdd(commentData);
        await comment.save();

        return comment;
    }

    // /**
    //  * Function used to create filters
    //  * help filter data based on user data and user submitted data (search_string)
    //  *
    //  * @param {*} search_string
    //  * @param {*} user
    //  * @returns
    //  */
    // async getDataCommentToPost(authorId: any) {
    //     // const data = await Posts.findById(authorId.artc);
    //     // if (!data) throw new HttpException(404, { error_code: '404', error_message: 'Post is not found' });

    //     const commentData = await CommentAdd.find({ data });

    //     return commentData;
    // }

    /**
     * Function used to get data of all users and pagination
     *
     * @param {*} param0
     * @param {*} user
     * @returns
     */
    async getAllCommentAndPaging(
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

        const users = await CommentAdd.find(filter).skip(skip).limit(limit);

        const documentCount = await CommentAdd.countDocuments(filter);

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
     * @param {*} comment
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
     * @param {*} comment
     * @return
     */
    async getCommentById(id: string) {
        const comments = await CommentAdd.findById(id);
        if (!comments) throw new HttpException(404, { error_code: '404', error_message: 'Comment is not found' });

        return comments;
    }

    /**
     * Function update user data
     *
     * @param {*} commentData
     * @param {*} id
     * @param {*} user
     * @return
     *
     */
    async updateComment(id: string, commentData: any, user: any) {
        const commentId = await CommentAdd.findById(id);
        if (!commentId) throw new HttpException(404, { error_code: '404', error_message: 'Comment is not found' });

        if (commentId.authorId._id.toString() !== user._id)
            throw new HttpException(404, { error_code: '404', error_message: 'Not authorized to update this post' });

        const comment = await CommentAdd.findByIdAndUpdate(id, commentData, { new: true });
        if (!comment) throw new HttpException(404, { error_code: '404', error_message: 'Comment is not found' });

        return comment;
    }

    /**
     * Function delete user data
     *
     * @param {*} id
     * @param {*} comment
     * @return
     */
    async deleteComment(id: string, user: any) {
        const commentId = await CommentAdd.findById(id);
        if (!commentId) throw new HttpException(404, { error_code: '404', error_message: 'Comment is not found' });

        if (commentId.authorId._id.toString() !== user._id)
            throw new HttpException(404, { error_code: '404', error_message: 'Not authorized to update this post' });

        const comment = await CommentAdd.findByIdAndDelete(id);
        if (!comment) throw new HttpException(400, { error_code: '404', error_message: 'Comment is not found' });

        return comment;
    }
}
