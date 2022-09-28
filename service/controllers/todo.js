import { v4 as uuid } from "uuid";

let todos = [];
export const getTodolist = (req, res) => {
  res.send(todos);
};

export const createTodo = (req, res) => {
  const todo = req.body;
  todos.push({ ...todo, id: uuid() });
  res.send("fruit added succesfully");
};