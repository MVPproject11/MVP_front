import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  width: 100%;
  height: 50px;
  flex-shrink: 0;
  border-radius: 6px;
  background: var(--Blaybus-Brand-color, #FFC52F);
  color: #FFF;
  text-align: center;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%; /* 25.2px */
  letter-spacing: -0.45px;
  border: 0;
`;

interface LoginButtonProps {
  children: React.ReactNode; // children을 허용
  onClick?: () => void; // 클릭 이벤트 핸들러 (선택적)
}

const LoginButton: React.FC<LoginButtonProps> = ({ children, onClick }) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

export default LoginButton;