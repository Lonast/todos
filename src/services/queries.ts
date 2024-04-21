import { useQuery } from "react-query";
import { getTodos } from "./api";

export function useTodos() {
  return useQuery({
    queryKey: "todos",
    queryFn: getTodos,
    refetchOnWindowFocus: false,
  });
}
