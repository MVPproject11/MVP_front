import axios from "axios";
import { Elder } from "../types/elder";

const API_URL = "/api/elders";

export const getElder = async (elderId: number) => {
  const response = await axios.get<{ code: number; message: string; data: Elder }>(`${API_URL}/${elderId}`);
  return response.data.data;
};
