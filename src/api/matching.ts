import axios from "axios";
import { Matching } from "../types/matching";

const API_URL = "/api/socialworker/matchings";

export const getMatchings = async () => {
  const response = await axios.get<{ code: number; message: string; data: Matching[] }>(API_URL);
  return response.data.data;
};

export const getMatchingById = async (matchingId: number) => {
  const response = await axios.get<{ code: number; message: string; data: Matching }>(`${API_URL}/${matchingId}`);
  return response.data.data;
};
