import { useQuery, useMutation } from "@tanstack/react-query";
import { getSocialWorker, updateSocialWorker, deleteSocialWorker, registerSocialWorker } from "../api/socialworkers";

export const useSocialWorker = () => {
  const { data: socialWorker, refetch } = useQuery({
    queryKey: ["socialWorker"],
    queryFn: getSocialWorker,
  });

  const update = useMutation({
    mutationFn: updateSocialWorker,
    onSuccess: () => refetch(),
  });

  const remove = useMutation({
    mutationFn: deleteSocialWorker,
    onSuccess: () => refetch(),
  });

  const register = useMutation({
    mutationFn: registerSocialWorker,
    onSuccess: () => refetch(),
  });

  return { socialWorker, update, remove, register };
};