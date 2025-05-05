import Project from "../models/Project.js";

export const getProjects = async (req, res) => {
    const proyectos = await Project.find().populate("investigadores");
    res.json(proyectos);
};

export const getProjectById = async (req, res) => {
    const proyecto = await Project.findById(req.params.id).populate("investigadores");
    res.json(proyecto);
};

export const createProject = async (req, res) => {
    const nuevo = new Project(req.body);
    await nuevo.save();
    res.json(nuevo);
};

export const updateProject = async (req, res) => {
    const actualizado = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(actualizado);
};

export const deleteProject = async (req, res) => {
    await Project.findByIdAndDelete(req.params.id);
    res.json({ msg: "Proyecto eliminado" });
};

export const addResearcherToProject = async (req, res) => {
    const { id, researcherId } = req.params;
    const proyecto = await Project.findById(id);
    if (!proyecto.investigadores.includes(researcherId)) {
        proyecto.investigadores.push(researcherId);
        await proyecto.save();
    }
    res.json(proyecto);
};
