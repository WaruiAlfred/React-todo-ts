import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import UpdateTodo from "./components/UpdateTodo";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";
import TodoContextProvider from "./context/store";
import { useState } from "react";
import { ITodo } from "./@types/todo";

function App() {
  const [updateData, setUpdateData] = useState<ITodo | any>("");

  return (
    <TodoContextProvider>
      <div className="container App">
        <Header />

        {updateData && updateData ? (
          <UpdateTodo updateData={updateData} setUpdateData={setUpdateData} />
        ) : (
          <AddTodo />
        )}

        <Todos setUpdateData={setUpdateData} />
      </div>
    </TodoContextProvider>
  );
}

export default App;
