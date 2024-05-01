import React from "react";
import style from "./todo.module.css";
import { ITodo, ITodoProps } from "../../types/types";

const Todo: React.FC<ITodoProps> = ({
  todo,
  refTodo,
  setUpdatedTitle,
  deleteTodo,
}) => {
  return (
    <div className={style.main}>
      {/* <input type="radio" checked={todo.completed} /> */}
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
