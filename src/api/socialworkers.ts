import axios from "axios";
import { SocialWorker } from "../types/socialworker";

const API_URL = "http://localhost:8081/api/socialworkers";

export const getSocialWorker = async () => {
  const response = await axios.get<{ code: number; message: string; data: SocialWorker }>(`${API_URL}/me`);
  return response.data.data;
};

export const updateSocialWorker = async (socialWorker: Partial<SocialWorker>) => {
  const response = await axios.put(`${API_URL}/me`, socialWorker);
  return response.data;
};

export const deleteSocialWorker = async () => {
  const response = await axios.delete(`${API_URL}/me`);
  return response.data;
};

export const registerSocialWorker = async (socialWorker: Omit<SocialWorker, "id">) => {
  const response = await axios.post(`${API_URL}/register`, socialWorker);
  return response.data;
};
