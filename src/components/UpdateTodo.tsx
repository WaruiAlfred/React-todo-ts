import { ChangeEvent, FC, useContext } from "react";
import { ITodo, TodoContextType } from "../@types/todo";
import { TodoContext } from "../context/store";

export interface IUpdateTodoProps {
  updateData: ITodo;
  setUpdateData: (data: any) => void;
}

const UpdateTodo: FC<IUpdateTodoProps> = ({ updateData, setUpdateData }) => {
  const { todos, setTodo } = useContext(TodoContext) as TodoContextType;

  const changeTask = (e: ChangeEvent<HTMLInputElement>) => {
    let newEntry = {
      id: updateData.id,
      title: e.target.value,
      status: updateData.status ? true : false,
    };
    setUpdateData(newEntry);
  };

  const updateTask = () => {
    let filterRecords = [...todos.filter((task) => task.id !== updateData.id)];
    let updatedObject = [...filterRecords, updateData];
    setTodo(updatedObject);
    setUpdateData("");
  };

  const cancelUpdate = () => {
    setUpdateData("");
  };

  return (
    <div className="row mb-20">
      <div className="col">
        <input
          value={updateData && updateData.title}
          onChange={(e) => changeTask(e)}
          className="form-control form-control-lg"
        />
      </div>
      <div className="col-auto">
        <button onClick={updateTask} className="btn btn-lg btn-success mr-20">
          Update
        </button>
        <button onClick={cancelUpdate} className="btn btn-lg btn-warning ">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default UpdateTodo;
