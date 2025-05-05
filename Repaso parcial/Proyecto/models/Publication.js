import mongoose from "mongoose";

const publicationSchema = new mongoose.Schema({
    titulo: {type: String, required: true},
    resumen: {type: String},
    fechaPublicacion: {type: Date, required: true},
    proyecto: {type: mongoose.Schema.Types.ObjectId, ref: "Project"},
    autores: [{type: mongoose.Schema.Types.ObjectId, ref: "Researcher"}]
})

export const Publication = mongoose.model("Publication", publicationSchema)