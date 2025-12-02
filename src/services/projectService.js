import Project from "../models/projectModel.js";

export const getAllProjects = async () => {
    const projects = await Project.find();
    return projects;
};

export const getProjectById = async (id) => {
    const project = await Project.findById(id);
    return project;
};

export const createProject = async (data) => {
    const newProject = await Project.create(data);
    return newProject;
};

export const updateProject = async (id, data) => {
    const updatedProject = await Project.findByIdAndUpdate(id, data, { new: true });
    return updatedProject;
};

export const deleteProject = async (id) => {
    const deletedProject = await Project.findByIdAndDelete(id);
    return deletedProject;
};

export default {
    getAllProjects,
    getProjectById,
    createProject,
    updateProject,
    deleteProject
};