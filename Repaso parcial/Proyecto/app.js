import bodyParser from "body-parser";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import projectsRoutes from "./routes/projects.js";

dotenv.config()

const app = express()

app.use(bodyParser.json())

mongoose.connect(process.env.MONGO_URI, {
    user: process.env.MONGO_USER,
    pass: process.env.MONGO_PASS,
    authSource: "admin",
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("Conectado con éxito a MongoDB"))
    .catch(error => console.log("Conexión fallida a MongoDB:", error))

app.use("/projects", projectsRoutes)

app.listen(3000, () => console.log("Server corriendo"))