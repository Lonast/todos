import axios from "axios";
import { ITodo } from "../types/types";

const BASE_URL = "https://jsonplaceholder.typicode.com/todos/";
const axiosInstance = axios.create({ baseURL: BASE_URL });

export const getTodos = async () => {
  return (await axios.get<ITodo[]>("todos")).data;
};
