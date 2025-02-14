import React from "react";
import styled from "styled-components";

// 전체 컨테이너
const InputAndButtonContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 23px; /* input과 버튼 간의 간격 */
`;

// Input 필드 스타일
const StyledInput = styled.input`
  flex: 1; /* 남은 공간을 채움 */
  height: 50px; /* input 높이 */
  padding: 12px 16px;
  border: 1px solid #e1e3e6; /* 테두리 */
  border-radius: 6px;
  outline: none;

  color: #111;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 22.4px */
  letter-spacing: -0.4px;

  ::placeholder {
    color: #aaa;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%; /* 22.4px */
    letter-spacing: -0.4px;
  }
`;

// 버튼 스타일
const StyledButton = styled.button`
  flex-shrink: 0; /* 버튼 크기 고정 */
  height: 50px;
  padding: 0 16px; /* 버튼 내부 여백 */
  background: #fff;
  color: var(--Blaybus-Brand-color, #ffc52f);
  text-align: center;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%; /* 25.2px */
  letter-spacing: -0.45px;
  border-radius: 6px;
  border: 1px solid var(--Blaybus-Brand, #ffc52f);
  cursor: pointer;

  &:hover {
    background: #fff6e0; /* 호버 상태 색상 */
  }
`;

interface InputAndButtonProps {
  placeholder?: string; // Input의 placeholder
  buttonText: string; // 버튼에 들어갈 텍스트
  onInputChange?: (e: React.ChangeEvent<HTMLInputElement>) => void; // Input의 onChange 핸들러
  onButtonClick?: () => void; // 버튼 클릭 핸들러
}

const InputAndButton: React.FC<InputAndButtonProps> = ({
  placeholder = "아이디 입력", // 기본 placeholder 값
  buttonText,
  onInputChange,
  onButtonClick,
}) => {
  return (
    <InputAndButtonContainer>
      <StyledInput
        type="text"
        placeholder={placeholder}
        onChange={onInputChange}
      />
      <StyledButton onClick={onButtonClick}>{buttonText}</StyledButton>
    </InputAndButtonContainer>
  );
};

export default InputAndButton;