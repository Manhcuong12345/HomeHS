import { HttpException } from './../common/exceptions/HttpException';
import { Category } from '../models/category.model';
import { CATEGORY_NOT_FOUND } from '../common/constants/err.constants';

export class CategoryService {
    private static instance: CategoryService;

    static getInstance(): CategoryService {
        if (!CategoryService.instance) {
            CategoryService.instance = new CategoryService();
        }
        return CategoryService.instance;
    }

    /**
     * Function create data Category
     * @param categoryData
     * @returns
     */
    async create(categoryData: any) {
        const category = new Category(categoryData);
        await category.save();

        return category;
    }

    /**
     * Function get all data Category
     * @returns
     */
    async getAll() {
        const categories = Category.find();
        return categories;
    }

    async getById(id: string) {
        const category = Category.findById(id);
        if (!category) throw new HttpException(404, { error_code: '404', error_message: 'Category is not found' });

        return category;
    }

    async update(id: string, categoryData: any) {
        const category = Category.findByIdAndUpdate(id, categoryData, { new: true });
        if (!category) throw new HttpException(404, { error_code: '404', error_message: 'Category is not found' });

        return category;
    }

    async delete(id: string) {
        const category = Category.findByIdAndDelete(id);
        if (!category) throw new HttpException(404, { error_code: '404', error_message: 'Category is not found' });

        return category;
    }
}
