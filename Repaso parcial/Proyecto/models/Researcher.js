import mongoose from "mongoose";

const researcherSchema = new mongoose.Schema({
    nombre: {type: String, required: true},
    especialidad: {type: String},
    email: {type: String},
    proyectos: [{type: mongoose.Schema.Types.ObjectId, ref: "Project"}]
})

export const Researcher = mongoose.model("Researcher", researcherSchema)