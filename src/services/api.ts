import axios from "axios";
import { ITodo } from "../types/types";

const BASE_URL = "http://localhost:3000/";
const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

export const getToods = async () => {
  return (await axiosInstance.get<ITodo[]>("/todos")).data;
};

export const deleteTodo = async (id: string) => {
  return await axiosInstance.delete(`/todos/${id}`);
};

export const createTodo = async (todo: ITodo) => {
  return await axiosInstance.post("/todos", todo);
};

export const updateTodo = async (todo: ITodo) => {
  return await axiosInstance.put(`/todos/${todo.id}`, todo);
};

export const getTodo = async (id: number) => {
  return (await axiosInstance.get<ITodo>(`/todos/${id}`)).data;
};
