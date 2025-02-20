import axios from "axios";
import { Caregiver } from "../types/caregiver";

const API_URL = "https://eleven.r-e.kr/api/caregivers";

export const getCaregiver = async (): Promise<Caregiver> => {
  const response = await axios.get(`${API_URL}/me`);
  return response.data.data;
};

export const updateCaregiver = async (caregiver: Partial<Caregiver>) => {
  return axios.put(`${API_URL}/me`, caregiver);
};

export const deleteCaregiver = async () => {
  return axios.delete(`${API_URL}/me`);
};

export const registerCaregiver = async (caregiver: Caregiver) => {
  return axios.post(`${API_URL}/register`, caregiver);
};
