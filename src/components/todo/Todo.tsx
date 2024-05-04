import React, { useRef } from "react";
import style from "./todo.module.css";
import { ITodoProps } from "../../types/types";
import { handleComplete } from "../../functions/functions";
import { useUpdateTodo } from "../../services/mutations";

const Todo: React.FC<ITodoProps> = ({
  todo,
  refTodo,
  setUpdatedTitle,
  deleteTodo,
}) => {
  const refCompleted = useRef<boolean>(todo.completed);
  const updateTodo = useUpdateTodo();
  const complete = handleComplete({
    ref: refTodo,
    updateTodo: updateTodo,
    completed: refCompleted.current,
  });
  return (
    <div className={style.main}>
      <input
        onClick={() => {
          refCompleted.current = !refCompleted.current;
          refTodo.current = todo;
          complete(refCompleted.current);
        }}
        onChange={() => {}}
        type="radio"
        checked={todo.completed}
      />
      <p className={style.title}>{todo.title}</p>
      <span className={style.delete} onClick={() => deleteTodo.mutate(todo.id)}>
        ❌
      </span>
      <button
        className={style.updateBtn}
        onClick={() => {
          setUpdatedTitle(todo.title);
          refTodo.current = todo;
        }}
      >
        Update
      </button>
    </div>
  );
};

export default Todo;
