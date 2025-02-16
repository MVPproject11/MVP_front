import React from "react";
import Layout from "../components/layout";
import FindPasswordForm from "../Form/findPasswordForm";
import SignUp from "../Form/signup";

export default function FindPasswordMain() {
  console.log("LoginidMain 컴포넌트 렌더링됨"); // 디버깅용
  return (
    <Layout>
      <FindPasswordForm/>
      {/* <SignUp/> */}
    </Layout>
  );
}