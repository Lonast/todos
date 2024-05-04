import { useQueries, useQuery } from "@tanstack/react-query";
import { getTodo, getToods } from "./api";

export function useGetTodos() {
  return useQuery({
    queryKey: ["todos"],
    queryFn: getToods,
  });
}

export function useTodos(ids: (number | undefined)[] | undefined) {
  return useQueries({
    queries: (ids ?? []).map((id) => {
      return {
        queryKey: ["todo", id],
        queryFn: () => getTodo(id!),
      };
    }),
  });
}
