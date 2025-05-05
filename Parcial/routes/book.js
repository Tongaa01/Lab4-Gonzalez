import express from "express"
import { createBook, deleteBookById, getAllBooks, getBookById, updateBookById } from "../controllers/bookController.js"

const bookRouter = express.Router()

bookRouter.get("/", getAllBooks)
bookRouter.get("/:id", getBookById)
bookRouter.post("/", createBook)
bookRouter.put("/:id", updateBookById)
bookRouter.delete("/:id", deleteBookById)

export default bookRouter