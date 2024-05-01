import { useRef, useState } from "react";
import "./App.css";
import {
  useCreateTodo,
  useDeleteTodo,
  useUpdateTodo,
} from "./services/mutations";
import { useGetTodos } from "./services/queries";
import { ITodo } from "./types/types";
import Todo from "./components/todo/Todo";
import { handleCreate, handleUpdate } from "./functions/functions";
import Form from "./components/form/Form";

function App() {
  const [title, setTitle] = useState<string>("");
  const ref = useRef<ITodo>({
    id: Date.now().toString(),
    title: "",
    userId: 1,
    completed: false,
  });
  const [updatedTitle, setUpdatedTitle] = useState<string>("");
  const todos = useGetTodos();
  const deleteTodo = useDeleteTodo();
  const createTodo = useCreateTodo();
  const updateTodo = useUpdateTodo();
  const create = handleCreate({
    createTodo: createTodo,
    todos: todos,
    title: title,
  });

  const update = handleUpdate({
    ref: ref,
    updateTodo: updateTodo,
    updatedTitle: updatedTitle,
  });

  return (
    <div style={{ margin: "50px" }}>
      <Form
        handleSubmit={create}
        title={title}
        setTitle={setTitle}
        text="Create Todo"
      />
      <hr />
      <Form
        text="Update Todo"
        handleSubmit={update}
        title={updatedTitle}
        setTitle={setUpdatedTitle}
      />
      <hr />
      <div>
        {todos.data?.map((todo) => {
          return (
            <Todo
              key={todo.id}
              todo={todo}
              refTodo={ref}
              deleteTodo={deleteTodo}
              setUpdatedTitle={setUpdatedTitle}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
