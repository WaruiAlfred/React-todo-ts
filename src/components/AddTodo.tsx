import { useContext } from "react";
import { TodoContextType } from "../@types/todo";
import { TodoContext } from "../context/store";

export interface IAddTodoProps {}

export default function AddTodo(props: IAddTodoProps) {
  const { newTask, setNewTask, addTask } = useContext(
    TodoContext
  ) as TodoContextType;

  return (
    <div className="row mb-20">
      <div className="col">
        <input
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="form-control form-control-lg"
        />
      </div>
      <div className="col-auto">
        <button onClick={addTask} className="btn btn-lg btn-success">
          Add Todo
        </button>
      </div>
    </div>
  );
}
