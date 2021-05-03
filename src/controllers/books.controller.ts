import { Body, Delete, Get, JsonController, NotFoundError, Param, Post, Put } from "routing-controllers";
import { IBook } from "../interfaces/book.interface";
import { BooksRepository } from "../repositories/books.repository";
import { BooksService } from "../services/books.service";

@JsonController("/books")
export class BooksController {
    protected booksService: BooksService
    protected booksRepository: BooksRepository
    constructor() {
        this.booksRepository = new BooksRepository()
        this.booksService = new BooksService()
    }

    @Get("/")
    findAllBooks() {
        return this.booksService.getAllBooks();
    }

    @Get("/:bookId")
    async findBoookById(@Param("bookId") bookId: string) {
        const book = this.booksService.getBookById(bookId);
        if (!book) return new NotFoundError("Book not found");
        return book;
    }

    @Post("/")
    async createBook(@Body() book: IBook) {
        return await this.booksService.createBook(book);
    }

    @Put("/:bookId")
    async updateBook(@Param("bookId") bookId: string, @Body() fields: any) {
        const updateResult = await this.booksService.updateBook(bookId, fields);
        if (!updateResult) return new NotFoundError("Book Not Found");
        return updateResult;
    }

    @Delete("/:bookId")
    async removeBook(@Param("bookId") bookId: string) {
        const removeResult = await this.booksService.deleteBook(bookId);
        if (!removeResult) return new NotFoundError("Book Not Found");
        return {
            result: "Book deleted"
        };
    }
}
