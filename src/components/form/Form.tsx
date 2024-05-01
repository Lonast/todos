import React from "react";
import { IFormProps } from "../../types/types";

const Form: React.FC<IFormProps> = (props) => {
  return (
    <form
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
      <button type="submit">{props.text}</button>
    </form>
  );
};

export default Form;
