import { useQuery, useMutation } from "@tanstack/react-query";
import { getMatchings, getMatchingById } from "../api/matching";

export const useMatchings = () => {
  return useQuery({
    queryKey: ["matchings"],
    queryFn: getMatchings,
  });
};

export const useMatchingById = (matchingId: number) => {
  return useQuery({
    queryKey: ["matching", matchingId],
    queryFn: () => getMatchingById(matchingId),
  });
};