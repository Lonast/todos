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
  title?: string;
  setTitle?: React.Dispatch<React.SetStateAction<string>>;
  setUpdatedTitle?: React.Dispatch<React.SetStateAction<string>>;
  setTodoIds?: React.Dispatch<React.SetStateAction<number[]>>;
  text: string;
}

//Functions
interface IHandleCreate {
  createTodo: UseMutationResult<AxiosResponse<any, any>, Error, ITodo, unknown>;
  todos: UseQueryResult<ITodo[], Error>;
  title: string;
}
export type THandleCreate = (props: IHandleCreate) => () => void;

interface IHandleUpdate {
  ref: React.MutableRefObject<ITodo>;
  updatedTitle: string;
  updateTodo: UseMutationResult<AxiosResponse<any, any>, Error, ITodo, unknown>;
}

export type THandleUpdate = (props: IHandleUpdate) => () => void;

interface IHandleTodos {
  setTodoIds: React.Dispatch<React.SetStateAction<number[]>>;
  ids: string;
}
export type THandleTodos = (props: IHandleTodos) => () => void;

interface IHandleComplete {
  ref: React.MutableRefObject<ITodo>;
  completed: boolean;
  updateTodo: UseMutationResult<AxiosResponse<any, any>, Error, ITodo, unknown>;
}
export type THandleComplete = (
  props: IHandleComplete
) => (completed: boolean) => void;
