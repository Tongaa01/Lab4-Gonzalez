import dotenv from "dotenv"
import express from "express"
import mongoose from "mongoose"
import authorRouter from "./routes/author.js"
import bookRouter from "./routes/book.js"

dotenv.config()

const app = express()
app.use(express.json())

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("Conectado con éxito a MongoDB"))
.catch(error => console.log("Conexión fallida a MongoDB:", error))

app.use("/books", authorRouter)
app.use("/authors", bookRouter)

app.listen(3000, ()=> console.log("Conectado a MongoDB correctamente"))