import bodyParser from "body-parser"
import dotenv from "dotenv"
import express from "express"
import mongoose from "mongoose"

dotenv.config()

const app = express()

app.use(bodyParser.json())

mongoose.connect("mongodb://localhost:27017", {
    user: process.env.MONGO_USER,
    pass: process.env.MONGO_PASS,
    authSource: "admin",
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("Conexión establecida")).catch(error => console.log(error))

const userSchema = new mongoose.Schema({
    nombre: String,
    edad: Number,
    email: String,
})

const User = mongoose.model("Usuario", userSchema)

//CRUD
app.get("/usuarios", async (res) => {
    try {
        const usuarios = await User.find()
        res.json(usuarios)
    } catch (err) {
        res.status(500).json({ error: `Error ${err}: No se pudo obtener los usuarios.` })
    }
})

app.post('/usuarios', async (req, res) => {
    const nuevoUsuario = new User(req.body);
    try {
        await nuevoUsuario.save();
        res.json(nuevoUsuario);
    } catch (err) {
        res.status(500).json({ error: `Error ${err}: No se pudo guardar el usuarios.` });
    }
});

//Iniciar el server
app.listen(3000, ()=>{
    console.log("<--- Server corriendo --->")
})