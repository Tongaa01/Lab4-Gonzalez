import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
    nombre: {type: String, required: true},
    descripcion: {type: String},
    fechaInicio: {type: Date, required: true},
    fechaFinalizacion: {type: Date},
    estado: {type: String, enum:["propuesta", "en curso", "finalizado"], default: "propuesta"},
    investigadores: [{type: mongoose.Schema.Types.ObjectId, ref: "Researcher"}]
})

export const Project = mongoose.model("Project", projectSchema)