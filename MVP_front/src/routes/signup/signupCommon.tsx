import React from "react";
import SignUp from "../../Form/signupForm/signupForm";
import './signupStyle.css';


export default function SignupMain() {
  console.log("SignupMain 컴포넌트 렌더링됨"); // 디버깅용
  return (
    <div className="container">
        <SignUp/>
    </div>
  );
}