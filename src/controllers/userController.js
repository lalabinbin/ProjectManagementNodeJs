import * as userService from "../services/userService.js";
import  * as response from "../untils/response.js";

export const getAllUsers = async (req, res) => {
    try {
        const users = await userService.getAllUsers();
        return response.successResponse(res, "Users fetched successfully", users);
    } catch (error) {
        return response.errorResponse(res, "Failed to fetch users", 500, error.message);
    }
};

export const getUserById = async (req, res) => {
    try {
        const user = await userService.getUserById(req.params.id);
        return response.successResponse(res, "User fetched successfully", user);
    } catch (error) {
        return response.errorResponse(res, "Failed to fetch user", 500, error.message);
    }
};

export const createUser = async (req, res) => {
    try {
        const user = await userService.createUser(req.body);
        return response.successResponse(res, "User created successfully", user);
    } catch (error) {
        return response.errorResponse(res, "Failed to create user", 500, error.message);
    }
};

export const updateUser = async (req, res) => {
    try {
        const user = await userService.updateUser(req.params.id, req.body);
        return response.successResponse(res, "User updated successfully", user);
    } catch (error) {
        return response.errorResponse(res, "Failed to update user", 500, error.message);
    }
};

export const deleteUser = async (req, res) => {
    try {
        const user = await userService.deleteUser(req.params.id);
        return response.successResponse(res, "User deleted successfully", user);
    } catch (error) {
        return response.errorResponse(res, "Failed to delete user", 500, error.message);
    }
};