import axios from "axios";

const API_BASE_URL = "http://localhost:8081/api/elders";

// 🔹 특정 어르신 정보 조회
export const getElder = async (elderId: number) => {
  const response = await axios.get(`${API_BASE_URL}/${elderId}`);
  return response.data;
};

// 🔹 어르신 정보 수정
export const updateElder = async (elderId: number, data: any) => {
  const response = await axios.put(`${API_BASE_URL}/${elderId}`, data);
  return response.data;
};

// 🔹 어르신 삭제
export const deleteElder = async (elderId: number) => {
  const response = await axios.delete(`${API_BASE_URL}/${elderId}`);
  return response.data;
};

// 🔹 어르신 등록
export const registerElder = async (data: any) => {
  const response = await axios.post(`${API_BASE_URL}/register`, data);
  return response.data;
};

// 🔹 사회복지사가 담당하는 어르신 목록 조회
export const getElders = async () => {
  const response = await axios.get(API_BASE_URL);
  return response.data;
};
