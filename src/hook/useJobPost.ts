import { useQuery, useMutation } from "@tanstack/react-query";
import { createJobPost } from "../api/jobposts";
import { JobPost } from "../types/jobpost";

export const useCreateJobPost = () => {
  return useMutation({
    mutationFn: ({ elderId, jobPost }: { elderId: number; jobPost: Omit<JobPost, "id"> }) =>
      createJobPost(elderId, jobPost),
  });
};