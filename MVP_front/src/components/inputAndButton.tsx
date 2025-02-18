import React from "react";
import styled from "styled-components";
import { FormInput } from "./formComponent";
import Button2 from "./button2";

const InputAndButtonContainer = styled.div`
  display: flex;
  align-items: center; /* 버튼과 input을 수평 정렬 */
  width: 100%;
  gap: 23px; /* input과 버튼 간의 간격 */
`;

const StyledInput = styled(FormInput)`
  flex-grow: 1; /* 남은 영역을 채우도록 설정 */
`;

const Hello = styled.div`
  width: 117px;
  font-size: 15px;
  margin-left: auto; /* 버튼을 우측 정렬 */
  display: flex;
  align-items: center; /* 버튼을 세로 정렬 */
  justify-content: flex-end;
`;

interface InputAndButtonProps {
  type: string;
  id: string;
  placeholder: string;
  buttonText: string;
}

const InputAndButton: React.FC<InputAndButtonProps> = ({ type, id, placeholder, buttonText }) => {
  return (
    <InputAndButtonContainer>
      <StyledInput type={type} id={id} placeholder={placeholder} />
      <Hello>
        <Button2>{buttonText}</Button2>
      </Hello>
    </InputAndButtonContainer>
  );
};

export default InputAndButton;