export async function loginAPI(email: string, password: string) {
  try {
    const response = await fetch("http://localhost:8081/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    // 응답 상태 확인
    if (!response.ok) {
      throw new Error("로그인에 실패했습니다.");
    }

    // 성공 응답 데이터 반환
    return response; // 전체 응답 반환
  } catch (error) {
    console.error("API 요청 오류:", error);
    throw error;
  }
}
