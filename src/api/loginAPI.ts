export async function loginAPI(email: string, password: string) {
  try {
    const response = await fetch("https://eleven.r-e.kr/api/auth/login", { // production URL로 수정
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      throw new Error("로그인에 실패했습니다.");
    }

    // 응답 본문이 JSON 형태일 경우에만 파싱
    const contentType = response.headers.get("Content-Type");
    let data = {};
    if (contentType && contentType.includes("application/json")) {
      data = await response.json();
    } else {
      throw new Error("응답이 JSON 형식이 아닙니다.");
    }

    // 응답 헤더에서 토큰 추출 (Bearer 토큰이라면 "Bearer "를 제거)
    const authHeader = response.headers.get("Authorization");
    const token = authHeader ? authHeader.replace("Bearer ", "") : null;

    return { data, token };
  } catch (error) {
    console.error("API 요청 오류:", error);
    throw error;
  }
}
