import { IBook } from "../interfaces/book.interface";
import { BooksRepository } from "../repositories/books.repository";

export class BooksService {
    private  booksRepository: BooksRepository
    constructor() { 
        this.booksRepository= new BooksRepository()
    }
    async getAllBooks(): Promise<IBook[]> {
        const books = await this.booksRepository.findAllBooks();
        return books;
    }

    async getBookById(bookId: IBook["_id"]): Promise<IBook | null> {
        const book = await this.booksRepository.findBookById(bookId);
        return book;
    }

    async createBook(book: IBook): Promise<IBook> {
        const createResult = await this.booksRepository.createBook(book);
        return createResult;
    }

    async updateBook(bookId: IBook["_id"], fieldsToUpdate: any): Promise<IBook | null> {
        const updateResult = await this.booksRepository.updateBookById(bookId, fieldsToUpdate);
        return updateResult;
    }

    async deleteBook(bookId: IBook["_id"]): Promise<IBook | null> {
        const removeResult = await this.booksRepository.removeBook(bookId);
        return removeResult;
    }
}
