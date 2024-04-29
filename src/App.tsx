import { useRef, useState } from "react";
import "./App.css";
import {
  useCreateTodo,
  useDeleteTodo,
  useUpdateTodo,
} from "./services/mutations";
import { useGetTodos } from "./services/queries";
import { ITodo } from "./types/types";

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

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const id =
      parseInt(todos.data![todos.data!.length - 1].id) + 1 ||
      Date.now().toString();
    const todo: ITodo = {
      id: id.toString(),
      title: title,
      userId: 1,
      completed: false,
    };
    createTodo.mutate(todo);
  }

  async function handleUpdate(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    ref.current = {
      ...ref.current,
      title: updatedTitle,
    };
    updateTodo.mutate(ref.current);
  }

  return (
    <div style={{ margin: "50px" }}>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit">Create Todo</button>
      </form>
      <hr />
      <form onSubmit={(e) => handleUpdate(e)}>
        <input
          type="text"
          value={updatedTitle}
          onChange={(e) => setUpdatedTitle(e.target.value)}
        />
        <button type="submit">Update Todo</button>
      </form>
      <hr />
      <div>
        {todos.data?.map((todo) => {
          return (
            <div style={{ display: "flex" }} key={todo.id}>
              <p
                onClick={() => deleteTodo.mutate(todo.id)}
                style={{ marginRight: "5px" }}
              >
                {todo.title}
              </p>
              <button
                onClick={() => {
                  setUpdatedTitle(todo.title);
                  ref.current = todo;
                }}
              >
                Update
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
