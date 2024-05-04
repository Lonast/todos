import { useMutation } from "@tanstack/react-query";
import { deleteTodo, createTodo, updateTodo } from "./api";
import { queryClient } from "../main";
import { ITodo } from "../types/types";

export function useCreateTodo() {
  return useMutation({
    mutationFn: (todo: ITodo) => createTodo(todo),
    onSettled: (_, error) => {
      if (error) {
        console.log(error);
      } else {
        queryClient.invalidateQueries({ queryKey: ["todos"] });
      }
    },
  });
}

export function useDeleteTodo() {
  return useMutation({
    mutationFn: (id: string) => deleteTodo(id),
    onSettled: async (_, error) => {
      if (error) {
        console.log(error);
      } else {
        await queryClient.invalidateQueries({ queryKey: ["todos"] });
      }
    },
  });
}

export function useUpdateTodo() {
  return useMutation({
    mutationFn: (todo: ITodo) => updateTodo(todo),
    onSettled: async (_, error) => {
      if (error) {
        console.log(error);
      } else {
        await queryClient.invalidateQueries({ queryKey: ["todos"] });
      }
    },
  });
}
