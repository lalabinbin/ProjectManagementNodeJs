import User from "../models/userModel.js";

export const getAllUsers = async () => {
    const users = await User.find();
    return users;
};

export const getUserById = async (id) => {
    const user = await User.findById(id);
    return user;
};

export const createUser = async (data) => {
    const newUser = await User.create(data);
    return newUser;
};

export const updateUser = async (id, data) => {
    const updatedUser = await User.findByIdAndUpdate(id, data, { new: true });
    return updatedUser;
};

export const deleteUser = async (id) => {
    const deletedUser = await User.findByIdAndDelete(id);
    return deletedUser;
};

export default {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser 
};