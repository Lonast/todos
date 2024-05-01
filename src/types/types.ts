import { UseMutationResult, UseQueryResult } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

//Api types
export interface ITodo {
  userId: number;
  id: string;
  title: string;
  completed: boolean;
}

//Component Props
export interface ITodoProps {
  todo: ITodo;
  refTodo: React.MutableRefObject<ITodo>;
  setUpdatedTitle: React.Dispatch<React.SetStateAction<string>>;
  deleteTodo: UseMutationResult<
    AxiosResponse<any, any>,
    Error,
    string,
    unknown
  >;
}
export interface IFormProps {
  handleSubmit: () => void;
  title: string;
  setTitle?: React.Dispatch<React.SetStateAction<string>>;
  setUpdatedTitle?: React.Dispatch<React.SetStateAction<string>>;
  text: string;
}

//Functions
export interface IHandleCreate {
  createTodo: UseMutationResult<AxiosResponse<any, any>, Error, ITodo, unknown>;
  todos: UseQueryResult<ITodo[], Error>;
  title: string;
}
export type THandleCreate = (props: IHandleCreate) => () => void;

export interface IHandleUpdate {
  ref: React.MutableRefObject<ITodo>;
  updatedTitle: string;
  updateTodo: UseMutationResult<AxiosResponse<any, any>, Error, ITodo, unknown>;
}

export type THandleUpdate = (props: IHandleUpdate) => () => void;
