import express from 'express';
import { deletetask, getmytask, newtask, updatetask } from '../controllers/task.js';
import { isaunthenticated } from "../middlewares/auth.js"
const router = express.Router()

router.post("/new", isaunthenticated, newtask);
router.get("/my", isaunthenticated, getmytask);
router.route("/:id").put(isaunthenticated, updatetask).delete(isaunthenticated, deletetask)
export default router;