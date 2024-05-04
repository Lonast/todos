import React from "react";
import { IFormProps } from "../../types/types";
import style from "./form.module.css";

const Form: React.FC<IFormProps> = (props) => {
  return (
    <form
      className={style.form}
      onSubmit={(e) => {
        e.preventDefault();
        props.handleSubmit();
      }}
    >
      <input
        type="text"
        value={props.title}
        onChange={(e) => props.setTitle!(e.target.value)}
      />
      <button type="submit" className={style.btn}>
        {props.text}
      </button>
    </form>
  );
};

export default Form;
