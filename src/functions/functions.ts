import { ITodo, THandleCreate, THandleUpdate } from "../types/types";

export const handleCreate: THandleCreate = (props) => {
  const id = props.todos.data
    ? parseInt(props.todos.data![props.todos.data!.length - 1].id) + 1
    : Date.now();
  const todo: ITodo = {
    id: id.toString(),
    title: props.title,
    userId: 1,
    completed: false,
  };
  const createTodo = props.createTodo;
  return () => {
    createTodo.mutate(todo);
  };
};

export const handleUpdate: THandleUpdate = (props) => {
  props.ref.current = {
    ...props.ref.current,
    title: props.updatedTitle,
  };
  return () => {
    props.updateTodo.mutate(props.ref.current);
  };
};
