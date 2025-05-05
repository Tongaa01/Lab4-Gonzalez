import { Author } from "../models/Author.js";

export const getAllAuthors = async (req, res) => {
    const allAuthors = await Author.find().populate("books")
    res.json(allAuthors)
}

export const getAuthorById = async (req, res) => {
    const author = await Author.findById(req.params.id).populate("books")
    res.json(author)
}

export const createAuthor = async (req, res) => {
    const newAuthor = new Author(req.body)
    await newAuthor.save()
    res.json(newAuthor)
}

export const updateAuthorById = async (req, res) => {
    const updatedAuthor = await Author.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.json(updateAuthorById)
}

export const deleteAuthorById = async (req, res) => {
    await Author.findByIdAndDelete(req.params.id)
    res.json({ msg: "Autor eliminado" })
}

export const addBookToAuthor = async (req, res) => {
    const { id, bookId } = req.params
    const author = await Author.findById(id)
    if (!author.books.includes(bookId)) {
        author.books.push(bookId)
        await author.save()
    }
    res.json(author)
}