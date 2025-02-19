import React from "react";
import styled from "styled-components";
import { FormInput } from "./formComponent";
import Button2 from "./button2";

const InputAndButtonContainer = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  gap: 23px; /* input과 버튼 간의 간격 */
`;

const Hello = styled.div`
  width: 119px;
  height: 30px;
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
      <FormInput type={type} id={id} placeholder={placeholder} />
      <Hello>
        <Button2>{buttonText}</Button2>
      </Hello>
    </InputAndButtonContainer>
  );
};

export default InputAndButton;