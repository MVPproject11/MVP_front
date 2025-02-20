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

    // 응답 본문이 JSON 형태일 경우에만 파싱
    let data = null;
    const contentType = response.headers.get("Content-Type");

    if (contentType && contentType.includes("application/json")) {
      data = await response.json();  // JSON 형태일 때만 파싱
    } else {
      throw new Error("응답이 JSON 형식이 아닙니다.");
    }

    return data;  // JSON 데이터 반환
  } catch (error) {
    console.error("API 요청 오류:", error);
    throw error;
  }
}
