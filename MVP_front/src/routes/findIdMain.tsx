import React from "react";
import Layout from "../components/layout";
import FindIdForm from "../Form/findIdForm";
import SignUp from "../Form/signup";

export default function FindIdMain() {
  console.log("FindIdMain 컴포넌트 렌더링됨"); // 디버깅용
  return (
    <Layout>
      {/* <FindIdForm/> */}
      <SignUp/>
    </Layout>
  );
}