export interface ITodo {
  id: number | string;
  title: string;
  status: boolean;
}

export type TodoContextType = {
  todos: ITodo[];
  newTask: string;
  setTodo: (todo: ITodo | ITodo[]) => void;
  setNewTask: (task: string) => void;
  addTask: () => void;
  markTaskDone: (id: Number | String) => void;
  deleteTask: (id: Number | String) => void;
};
