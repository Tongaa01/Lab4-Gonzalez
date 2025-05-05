import express from "express";
import { addBookToAuthor, createAuthor, deleteAuthorById, getAllAuthors, getAuthorById, updateAuthorById } from "../controllers/authorController.js";

const authorRouter = express.Router()

authorRouter.get("/", getAllAuthors)
authorRouter.get("/:id", getAuthorById)
authorRouter.post("/", createAuthor)
authorRouter.put("/:id", updateAuthorById)
authorRouter.delete("/:id", deleteAuthorById)
authorRouter.put("/:id/addBook/:bookId", addBookToAuthor)

export default authorRouter