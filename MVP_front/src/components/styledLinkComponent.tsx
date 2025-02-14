import React from "react";
import styled from "styled-components";

// 링크 컨테이너 (아이디/비밀번호 찾기)
const LinkContainer = styled.div`
  display: flex;
  width: auto; /* 필요한 만큼만 너비 사용 */
  margin-left: auto; /* 부모 컨테이너의 오른쪽으로 밀어냄 */
  height: 20px;
  padding: 0;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 8px;
`;

// 텍스트 스타일 정의
const StyledLink = styled.span`
  color: #c9c9c9;
  text-align: right;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%; /* 19.6px */
  letter-spacing: -0.35px;
`;

// 링크 스타일 정의 (링크와 아이콘 포함)
const StyledLinkContainer = styled.a`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 4px; /* 텍스트와 아이콘 간격 */
  text-decoration: none;

  svg {
    width: 16px; /* 아이콘 너비 */
    height: 16px; /* 아이콘 높이 */
    stroke: #c9c9c9; /* 아이콘 색상 */
  }
`;

const StyledLinkComponent: React.FC<{ href: string; text: string }> = ({
  href,
  text,
}) => {
  return (
    <StyledLinkContainer href={href}>
      <StyledLink>{text}</StyledLink>
      {/* SVG 아이콘 */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
      >
        <path
          d="M6 4L10 8L6 12"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </StyledLinkContainer>
  );
};

export default StyledLinkComponent;