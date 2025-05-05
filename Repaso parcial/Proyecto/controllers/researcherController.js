import Researcher from "../models/Researcher.js"

export const getResearchers = async (req, res) => {
    const researchers = await Researcher.find().populate("proyectos")
    res.json(researchers)
}

export const getResearcherById = async (req, res) => {
    const researcher = await Researcher.findById(req.params.id).populate("proyectos")
    res.json(researcher)
}

export const postResearcher = async (req, res) => {
    const newResearcher = new Researcher(req.body)
    await newResearcher.save()
    res.json(newResearcher)
}