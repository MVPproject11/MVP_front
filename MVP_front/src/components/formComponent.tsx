import styled from "styled-components";

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;
`;

export const Label = styled.label`
  color: #000;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%; /* 16.8px */
  letter-spacing: -0.35px;
  margin: 0;
  padding: 0;
`;

export const FormInput = styled.input`
  display: flex;
  height: 22.75px;
  padding: 12px 16px;
  align-items: center;
  gap: 10px;
  align-self: stretch;
  border: 0;
  border-bottom: 1px solid #E1E3E6;

  color: #111;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 22.4px */
  letter-spacing: -0.4px;

  ::placeholder {
    color: #AAA;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%; /* 22.4px */
    letter-spacing: -0.4px;
  }
`;

