export async function loginAPI(email: string, password: string) {
  try {
    const response = await fetch("https://eleven.r-e.kr/api/auth/login", {
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

    // Authorization 헤더에서 JWT 토큰 추출
    const token = response.headers.get("Authorization");

    if (!token) {
      throw new Error("인증 토큰이 응답 헤더에 없습니다.");
    }

    // JWT 토큰을 포함한 객체 반환
    return { token };
  } catch (error) {
    console.error("API 요청 오류:", error);
    throw error;
  }
}
