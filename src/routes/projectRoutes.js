// src/routes/projectRoutes.js
import express from "express";
import {
  getAllProjects,
  getDetailProject,
  createProject,
  updatedProject,
  deleteProject,
} from "../controllers/projectController.js";

const router = express.Router();

/**
 * @openapi
 * components:
 *   schemas:
 *     Project:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *         name:
 *           type: string
 *         description:
 *           type: string
 *         status:
 *           type: string
 *           enum: [pending, in-progress, completed]
 *         startDate:
 *           type: string
 *           format: date-time
 *         owner:
 *           type: string
 *         createdAt:
 *           type: string
 *           format: date-time
 *         updatedAt:
 *           type: string
 *           format: date-time
 *
 *   responses:
 *     ProjectNotFound:
 *       description: Không tìm thấy dự án
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               message:
 *                 type: string
 *               errorCode:
 *                 type: string
 *                 example: "PROJECT_NOT_FOUND"
 */

/**
 * @openapi
 * /projects:
 *   get:
 *     summary: Lấy danh sách dự án
 *     tags: [Project]
 *     responses:
 *       200:
 *         description: Lấy danh sách dự án thành công
 *       500:
 *         description: Lỗi hệ thống
 */
router.get("/", getAllProjects);

/**
 * @openapi
 * /projects/{id}:
 *   get:
 *     summary: Lấy chi tiết dự án theo ID
 *     tags: [Project]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Lấy chi tiết thành công
 *       404:
 *         $ref: '#/components/responses/ProjectNotFound'
 *       500:
 *         description: Lỗi hệ thống
 */
router.get("/:id", getDetailProject);

/**
 * @openapi
 * /projects:
 *   post:
 *     summary: Tạo dự án mới
 *     tags: [Project]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [name, owner]
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               owner:
 *                 type: string
 *     responses:
 *       201:
 *         description: Tạo dự án thành công
 *       500:
 *         description: Lỗi hệ thống
 */
router.post("/", createProject);

/**
 * @openapi
 * /projects/{id}:
 *   put:
 *     summary: Cập nhật dự án
 *     tags: [Project]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/Project"
 *     responses:
 *       200:
 *         description: Cập nhật dự án thành công
 *       404:
 *         $ref: '#/components/responses/ProjectNotFound'
 *       500:
 *         description: Lỗi hệ thống
 */
router.put("/:id", updatedProject);

/**
 * @openapi
 * /projects/{id}:
 *   delete:
 *     summary: Xóa dự án
 *     tags: [Project]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Xóa dự án thành công
 *       404:
 *         $ref: '#/components/responses/ProjectNotFound'
 *       500:
 *         description: Lỗi hệ thống
 */
router.delete("/:id", deleteProject);

export default router;
