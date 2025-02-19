import { useQuery, useMutation } from "@tanstack/react-query";
import {
  getElder,
  updateElder,
  deleteElder,
  registerElder,
  getElders,
} from "../api/elders";
import {
  getMatchings,
  getMatchingById,
  respondToMatching,
} from "../api/matching";


export const useElder = (elderId: number) => {
  return useQuery({
    queryKey: ["elder", elderId],
    queryFn: () => getElder(elderId),
  });
};


export const useUpdateElder = () => {
  return useMutation({
    mutationFn: ({ elderId, data }: { elderId: number; data: any }) =>
      updateElder(elderId, data),
  });
};


export const useDeleteElder = () => {
  return useMutation({
    mutationFn: (elderId: number) => deleteElder(elderId),
  });
};


export const useRegisterElder = () => {
  return useMutation({
    mutationFn: (data: any) => registerElder(data),
  });
};


export const useElders = () => {
  return useQuery({
    queryKey: ["elders"],
    queryFn: getElders,
  });
};


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


export const useRespondToMatching = () => {
  return useMutation({
    mutationFn: ({ matchingId, progressStatus }: { matchingId: number; progressStatus: string }) =>
      respondToMatching(matchingId, progressStatus),
  });
};
