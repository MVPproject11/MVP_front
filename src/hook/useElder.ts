import { useQuery } from "@tanstack/react-query";
import { getElder } from "../api/elders";

export const useElder = (elderId: number) => {
  return useQuery({
    queryKey: ["elder", elderId],
    queryFn: () => getElder(elderId),
  });
};
