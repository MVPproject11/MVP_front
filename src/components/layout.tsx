import React from "react";
import "./layout.css";
import logo from "../assets/image/logo.png";

interface LayoutProps {
  children: React.ReactNode; // 자식 요소를 받을 props
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="layout-container">
      {/* 메인 사진 */}
      <div className="main-container"></div>

      {/* 콘텐츠 컨테이너 */}
      <div className="contents-container">
        {/* 로고 */}
        <img src={logo} alt="함께돌봄 로고" className="logo" />

        {/* 자식 요소 */}
        {children}
      </div>
    </div>
  );
}