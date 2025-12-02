import * as projectService from "../services/projectService.js";
import { successResponse, errorResponse } from "../untils/response.js";
export const createProject = async (req, res) => {
  try {
    const newProject = await projectService.createProject(req.body);
    return successResponse(res, "Tạo dự án thành công", newProject, 201);
  } catch (err) {
    return errorResponse(res, "Lỗi tạo dự án", 500, err.message);
  }
};

export const getAllProjects = async (req, res) => {
  try {
    const projects = await projectService.getAllProjects();
    return successResponse(res, "Lấy danh sách dự án thành công", projects);
  } catch (err) {
    return errorResponse(res, "Lỗi hệ thống", 500, err.message);
  }
};

export const getDetailProject = async (req, res) => {
  try {
    const project = await projectService.getProjectById(req.params.id);
    if (!project)
      return errorResponse(res, "Không tìm thấy dự án", 404, "PROJECT_NOT_FOUND");
    return successResponse(res, "Lấy chi tiết thành công", project);
  } catch (err) {
    return errorResponse(res, "Lỗi hệ thống", 500, err.message);
  }
};

export const updatedProject = async (req, res) => {
  try {
    const project = await projectService.updateProject(req.params.id, req.body);
    if (!project)
      return errorResponse(res, "Không tìm thấy dự án", 404, "PROJECT_NOT_FOUND");
    return successResponse(res, "Cập nhật dự án", project);
  } catch (err) {
    return errorResponse(res, "Lỗi hệ thống", 500, err.message);
  }
};

export const deleteProject = async (req, res) => {
  try {
    const project = await projectService.deleteProject(req.params.id);
    if (!project)
      return errorResponse(res, "Không tìm thấy dự án", 404, "PROJECT_NOT_FOUND");
    return successResponse(res, "Xóa dự án thành công", project);
  } catch (err) {
    return errorResponse(res, "Lỗi Hệ Thống", 500, err.message);
  }
};
