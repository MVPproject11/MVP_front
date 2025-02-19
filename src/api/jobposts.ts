import axios from "axios";
import { JobPost } from "../types/jobpost";

const API_URL = "http://localhost:8081/api/elders";

export const createJobPost = async (elderId: number, jobPost: Omit<JobPost, "id">) => {
  const response = await axios.post(`${API_URL}/${elderId}/jobposts`, jobPost);
  return response.data;
};
