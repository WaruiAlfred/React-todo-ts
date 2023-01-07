import { Fragment, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faPen,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import { TodoContext } from "../context/store";
import { ITodo, TodoContextType } from "../@types/todo";

export interface ITodosProps {
  setUpdateData: (data: ITodo) => void;
}

export default function Todos(props: ITodosProps) {
  const { todos, markTaskDone, deleteTask } = useContext(
    TodoContext
  ) as TodoContextType;

  return (
    <Fragment>
      {todos && todos.length ? "" : "No todos added!"}

      {todos &&
        todos
          .sort((a, b) => (b.id > a.id ? 1 : -1))
          .map((task, index) => (
            <Fragment key={task.id}>
              <div className="col taskBg">
                <div className={task.status ? "done" : ""}>
                  <span className="taskNumber">{todos.length - index}</span>
                  <span className="taskText">{task.title}</span>
                </div>
                <div className={` iconsWrap ${task.status ? "undo" : ""}`}>
                  <span
                    onClick={() => markTaskDone(task.id)}
                    title={task.status ? "Incomplete" : "Complete"}
                  >
                    <FontAwesomeIcon icon={faCircleCheck} />
                  </span>
                  {!task.status && (
                    <span
                      onClick={() =>
                        props.setUpdateData({
                          id: task.id,
                          title: task.title,
                          status: task.status ? true : false,
                        })
                      }
                      title="Edit"
                    >
                      <FontAwesomeIcon icon={faPen} />
                    </span>
                  )}
                  <span onClick={() => deleteTask(task.id)} title="Delete">
                    <FontAwesomeIcon icon={faTrashCan} />
                  </span>
                </div>
              </div>
            </Fragment>
          ))}
    </Fragment>
  );
}
