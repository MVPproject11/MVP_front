import React from "react";
import Layout from "../components/layout";
import LoginForm from "../Form/loginForm";

export default function LoginMain() {
  console.log("LoginMain 컴포넌트 렌더링됨"); // 디버깅용
  return (
    <Layout>
      <LoginForm />
    </Layout>
  );
}