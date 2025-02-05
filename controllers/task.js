import { Task } from "../models/task.js"
import ErrorHandler from "../middlewares/error.js";

export const newtask = async (req, res, next) => {
    try {
        const { title, description } = req.body
        await Task.create({
            title,
            description,
            user: req.user
        });
        res.status(201).json({
            success: true,
            message: "task added successfully"
        })
    } catch (error) {
        next(error);
    }
};

export const getmytask = async (req, res, next) => {
    try {
        const userid = req.user._id;
        const tasks = await Task.find({ user: userid });
        res.status(201).json({
            success: true,
            tasks,
        })
    } catch (error) {
        next(error);
    }
};
export const updatetask = async (req, res, next) => {
    try {
        const { id } = req.params;
        const task = await Task.findById(id);
        if (!task)
            return next(new ErrorHandler("Task Now Found", 404));
        task.iscompleted = !task.iscompleted;
        await task.save();
        res.status(201).json({
            success: true,
            message: "Task Updated",
        })
    } catch (error) {
        next(error);
    }
};
export const deletetask = async (req, res, next) => {
    try {
        const { id } = req.params;
        const task = await Task.findById(id);
        if (!task)
            return next(new ErrorHandler("Task Now Found", 404));
        await task.deleteOne();
        res.status(201).json({
            success: true,
            message: "Task Deleted"
        })
    } catch (error) {
        next(error); 
    }
};
