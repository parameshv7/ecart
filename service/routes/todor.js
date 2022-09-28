import express from "express";

import { createTodo, getTodolist } from "../controllers/todo.js";
const router = express.Router();

router.get("/todos", getTodolist);
router.post("/todo", createTodo);
//router.put("/batu/:id", updateBat);
export default router;