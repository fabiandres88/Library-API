import { BooksController } from "../../controllers/books.controller";
import { BooksRepository } from "../../repositories/books.repository";
import { BooksService } from "../../services/books.service";
import { bookBody, bookInDb, bodyToUpdate, deleteResult } from "../samples/books/books.sample";

describe("BooksController", () => {
    let booksService: BooksService;
    let booksRepository: BooksRepository;
    let booksController: BooksController;

    beforeEach(async () => {
        booksService = new BooksService();
        booksRepository = new BooksRepository();
        booksController = new BooksController(booksService, booksRepository);
    });
    it("should get all books", async () => {
        const books = jest.spyOn((booksController as any).booksService, "getAllBooks")
            .mockResolvedValue({ ...bookInDb });

        await expect(booksController.findAllBooks()).resolves.toEqual({ ...bookInDb });
        expect(books).toHaveBeenCalled();
    });

    it("should get a book by id", async () => {
        const book = jest.spyOn((booksController as any).booksService, "getBookById"
        ).mockResolvedValue({ ...bookInDb });

        await expect(booksController.findBoookById("60a962e429934133f4dffef7"))
            .resolves.toEqual({ ...bookInDb })
        expect(book).toBeCalled();
        expect(book.mock.calls).toEqual([["60a962e429934133f4dffef7"]]);
    });

    it("should create a book", async () => {
        const createResult = jest.spyOn((booksController as any).booksService, "createBook")
            .mockResolvedValue({ ...bookInDb });

        await expect(booksController.createBook({
            ...bookBody
        } as any)).resolves.toEqual({ ...bookInDb });

        expect(createResult).toBeCalled();
        expect(createResult.mock.calls).toEqual([[{ ...bookBody }]]);
    });

    it("should update a book", async () => {
        const createResult = jest.spyOn((booksController as any).booksService, "updateBook")
            .mockResolvedValue({ ...bookInDb });

        await expect(booksController.updateBook("60a962e429934133f4dffef7", { ...bodyToUpdate }))
            .resolves.toEqual({ ...bookInDb });

        expect(createResult).toBeCalled();
        expect(createResult.mock.calls).toEqual([["60a962e429934133f4dffef7", { ...bodyToUpdate }]]);
    });

    it("should update a book", async () => {
        const createResult = jest.spyOn((booksController as any).booksService, "deleteBook")
            .mockResolvedValue({ ...deleteResult });

        await expect(booksController.removeBook("60a962e429934133f4dffef7"))
            .resolves.toEqual({ ...deleteResult });

        expect(createResult).toBeCalled();
        expect(createResult.mock.calls).toEqual([["60a962e429934133f4dffef7"]]);
    });
});
