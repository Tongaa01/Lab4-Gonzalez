import mongoose from "mongoose"

const bookSchema = mongoose.Schema({
    title: {type: String, required: true},
    summary: {type: String},
    genre: {type: String, required: true},
    published: {type: Date, required: true},
    available: {type: Boolean, required: true},
})

export const Book = mongoose.model("Book", bookSchema)