import React from "react";
import Layout from "../components/layout";
import LoginForm from "../Form/loginForm";
import { Routes, Route } from 'react-router-dom'; 
import FindPassword from '../routes/findPasswordMain';

export default function LoginMain() {
  console.log("LoginMain 컴포넌트 렌더링됨"); // 디버깅용
  return (
    <div>
    <Layout>
      <LoginForm />
      <Routes>
        <Route path="/find-password" element={<FindPassword/>}/>
      </Routes>
    </Layout>

    
    </div>
    
  );
}