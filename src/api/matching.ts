import axios from "axios";

const API_BASE_URL = "https://eleven.r-e.kr/api/matchings";

// 🔹 요양보호사 매칭 목록 조회
export const getMatchings = async () => {
  const response = await axios.get(API_BASE_URL);
  return response.data;
};

// 🔹 특정 요양보호사 매칭 조회
export const getMatchingById = async (matchingId: number) => {
  const response = await axios.get(`${API_BASE_URL}/${matchingId}`);
  return response.data;
};

// 🔹 요양보호사 매칭 응답 (상태 변경)
export const respondToMatching = async (matchingId: number, progressStatus: string) => {
  const response = await axios.put(`${API_BASE_URL}/${matchingId}/response`, {
    progressStatus,
  });
  return response.data;
};
