import React, { useState } from "react";
import styled from "styled-components";
import vIcon from "../assets/image/v.png"; 

const EmailInputContainer = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #E1E3E6;
  width: 100%;
  position: relative;
`;

const Input = styled.input`
  flex: 1;
  border: none;
  outline: none;
  padding: 12px 0 12px 16px;
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 400;
  color: #111;

  ::placeholder {
    color: #AAA;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
    letter-spacing: -0.4px;
  }
`;

const AtText = styled.span`
  padding: 0 16px;
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 600;
  color: #000;
`;

const SelectWrapper = styled.div`
  flex: 1;
  position: relative;
  display: flex;
  align-items: center;
`;

const SelectButton = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 400;
  color: #aaa;
`;

const SelectIcon = styled.img`
  width: 10px;
  height: 6px;
  position: absolute;
  right: 16px;
  cursor: pointer;
`;

const DropdownMenu = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background: #595959;
  color: #fff;
  border-radius: 6px;
  box-shadow: 1px 1px 1px 0px rgba(0, 0, 0, 0.7);
  opacity: 0.95;
  margin: 4px 0 0 0;
  padding: 8px 0;
  list-style: none;
  z-index: 2;
`;

const DropdownItem = styled.li`
  padding: 8px 16px;
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 400;
  color: #fff;
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background: rgba(255, 197, 47, 0.7);
  }
`;

const EmailInputGroup = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isCustomInput, setIsCustomInput] = useState(false); // 직접입력 모드 상태
  const [customInputValue, setCustomInputValue] = useState(""); // 사용자 입력 값

  const options = [
    "naver.com",
    "gmail.com",
    "daum.net",
    "kakao.com",
    "hotmail.com",
    "직접입력",
  ];

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const selectOption = (option: string) => {
    if (option === "직접입력") {
      setIsCustomInput(true); // 직접입력 모드 활성화
      setSelectedOption(""); // 기본 선택값 초기화
    } else {
      setIsCustomInput(false); // 직접입력 모드 비활성화
      setSelectedOption(option);
    }
    setIsOpen(false);
  };

  const handleCustomInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCustomInputValue(event.target.value);
  };

  const handleIconClick = () => {
    setIsOpen(true); // 드롭다운 항상 열리게 설정
  };

  return (
    <EmailInputContainer>
      <Input type="text" placeholder="이메일 입력" />
      <AtText>@</AtText>
      <SelectWrapper>
        {!isCustomInput ? ( // 기본 Select 또는 드롭다운 모드
          <>
            <SelectButton onClick={toggleDropdown}>
              {selectedOption || "이메일 선택"}
              <SelectIcon src={vIcon} alt="화살표 아이콘" onClick={handleIconClick} />
            </SelectButton>
            {isOpen && (
              <DropdownMenu>
                {options.map((option) => (
                  <DropdownItem
                    key={option}
                    onClick={() => selectOption(option)}
                  >
                    {option}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            )}
          </>
        ) : ( // 직접입력 모드
          <>
            <Input
              type="text"
              placeholder="직접 입력"
              value={customInputValue}
              onChange={handleCustomInputChange}
            />
            <SelectIcon src={vIcon} alt="화살표 아이콘" onClick={handleIconClick} />
          </>
        )}
      </SelectWrapper>
    </EmailInputContainer>
  );
};

export default EmailInputGroup;