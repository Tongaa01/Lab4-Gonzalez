import { Author } from "../models/Author.js";
import { Book } from "../models/Book.js";

export const getAllBooks = async (req, res) => {
    const allBooks = await Book.find()
    res.json(allBooks)
}

export const getBookById = async (req, res) => {
    const book = await Book.findById(req.params.id)
    res.json(book)
}

export const createBook = async (req, res) => {
    const newBook = new Book(req.body)
    await newBook.save()
    res.json(newBook)
}

export const updateBookById = async (req, res) => {
    const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.json(updatedBook)
}

export const deleteBookById = async (req, res) => {
    const authors = await Author.find().populate("books")
    const book = await Book.findById(req.params.id)
    if (!authors.books.includes(req.params.id)) {
        await Book.findByIdAndDelete(req.params.id)
    }
    res.json({ msg: "Libro eliminado" })
}