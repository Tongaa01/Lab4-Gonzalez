import express from "express";
import {
    addResearcherToProject,
    createProject,
    deleteProject,
    getProjectById,
    getProjects,
    updateProject
} from "../controllers/projectController.js";

const router = express.Router();

router.get("/", getProjects);
router.get("/:id", getProjectById);
router.post("/", createProject);
router.put("/:id", updateProject);
router.delete("/:id", deleteProject);
router.put("/:id/add-researcher/:researcherId", addResearcherToProject);

export default router;
