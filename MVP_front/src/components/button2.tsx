import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  width: 100%;
  height: 50px;
  flex-shrink: 0;
  background: #fff;
  color: var(--Blaybus-Brand-color, #FFC52F);
  text-align: center;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%; /* 25.2px */
  letter-spacing: -0.45px;
  border-radius: 6px;
  border: 1px solid var(--Blaybus-Brand, #FFC52F);
  cursor: pointer;

  &:hover {
    background: #fff6e0; /* 호버 상태 색상 */
  }
`;

interface SignupButtonProps {
  children: React.ReactNode; // children을 허용
  onClick?: () => void; // 클릭 이벤트 핸들러 (선택적)
}

const SignupButton: React.FC<SignupButtonProps> = ({ children, onClick }) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

export default SignupButton;