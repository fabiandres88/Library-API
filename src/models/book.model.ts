import mongoose, { Schema } from 'mongoose';
import { IBook } from "../interfaces/book.interface"

const bookSchema: Schema = new Schema ({
    name: {
        type: String,
        required: true,
        unique: true
    },
    author: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true        
    }
})

export default mongoose.model<IBook>('Book', bookSchema);
