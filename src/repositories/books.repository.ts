import { IBook } from "../interfaces/book.interface";
import Books from "../models/book.model";

export class BooksRepository {
    async findAllBooks() {
        const books: Array<IBook> = await Books.find({}, '_id name genre author');
        return books;
    }

    async findBookById(id: IBook["_id"]): Promise<IBook | null> {
        const book: IBook | null = await Books.findOne({_id: id}).lean();
        return book;
    }

    async createBook(book: IBook): Promise<IBook> {
        const createResult = await Books.create(book);
        return createResult;
    }

    async updateBookById(bookId: IBook["_id"], fieldsToUpdate: any): Promise<IBook | null> {
        const updateResult = await Books.findByIdAndUpdate(bookId, {$set: fieldsToUpdate});
        return updateResult;
    }

    async removeBook(bookId: IBook["_id"]): Promise<IBook | null> {
        const removeResult = await Books.findByIdAndRemove(bookId);
        return removeResult;
    }
}
