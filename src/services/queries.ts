import { useQuery } from "@tanstack/react-query";
import { getToods } from "./api";

export function useGetTodos() {
  return useQuery({
    queryKey: ["todos"],
    queryFn: getToods,
  });
}
