import { useRef, useState } from "react";
import "./App.css";
import {
  useCreateTodo,
  useDeleteTodo,
  useUpdateTodo,
} from "./services/mutations";
import { useGetTodos, useTodos } from "./services/queries";
import { ITodo } from "./types/types";
import Todo from "./components/todo/Todo";
import { handleCreate, handleTodos, handleUpdate } from "./functions/functions";
import Form from "./components/form/Form";

function App() {
  const [updatedTitle, setUpdatedTitle] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [todoIds, setTodoIds] = useState<number[]>([]);
  const [ids, setIds] = useState<string>("");

  const ref = useRef<ITodo>({
    id: Date.now().toString(),
    title: "",
    userId: 1,
    completed: false,
  });
  const todos = useGetTodos();
  const someTodos = useTodos(todoIds);
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

  const getTodos = handleTodos({
    setTodoIds: setTodoIds,
    ids: ids,
  });
  return (
    <div style={{ margin: "50px" }}>
      <h1>Todos</h1>
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
      <Form
        text="Get Todos"
        title={ids}
        setTodoIds={setTodoIds}
        setTitle={setIds}
        handleSubmit={getTodos}
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
      <div>
        <h1>Todos from Ids</h1>
        {someTodos.map((el) => {
          return <p key={el.data?.id}>{el.data?.title}</p>;
        })}
      </div>
    </div>
  );
}

export default App;
