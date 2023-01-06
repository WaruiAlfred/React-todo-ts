import { ITodo, TodoContextType } from "../@types/todo";
import { createContext, FC, useState } from "react";

let todos = [
  {
    id: 1,
    title: "Task 1",
    status: false,
  },
  { id: 2, title: "Task 2", status: false },
];

const initialValues: TodoContextType = {
  todos: todos,
  newTask: "",
  setTodo: (todo: ITodo | ITodo[]) => {},
  setNewTask: (task: string) => {},
  addTask: () => {},
  markTaskDone: (id: Number | String) => {},
  deleteTask: (id: Number | String) => {},
};

export const TodoContext = createContext<TodoContextType | null>(initialValues);

const TodoContextProvider: FC<any> = ({ children }) => {
  const [todo, setTodo] = useState<ITodo[]>(todos);
  const [newTask, setNewTask] = useState<string>("");

  const addTask = () => {
    if (newTask) {
      let num = todo.length + 1;
      let newEntry = { id: num, title: newTask, status: false };
      setTodo((prevTodos) => [...prevTodos, newEntry]);
      setNewTask("");
    }
  };

  const deleteTask = (id: Number | String) => {
    setTodo(() => todo.filter((task) => task.id !== id));
  };

  const markTaskDone = (id: Number | String) => {
    let newTodos = todo.map((task) => {
      if (task.id === id) {
        return { ...task, status: !task.status };
      }
      return task;
    });
    setTodo(() => newTodos);
  };

  const contextValues: TodoContextType | any = {
    todos: todo,
    newTask: newTask,
    setTodo: setTodo,
    setNewTask: setNewTask,
    addTask: addTask,
    markTaskDone: markTaskDone,
    deleteTask: deleteTask,
  };

  return (
    <TodoContext.Provider value={contextValues}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
