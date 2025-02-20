// 로그인 처리 함수
import React from "react";
import styled from "styled-components";
import SocialLogin from "../components/socialLogin";
import StyledLinkComponent from "../components/styledLinkComponent";
import Button1 from "../components/button1";
import Button2 from "../components/button2";
import { FormGroup, Label, FormInput } from "../components/formComponent";
import { useLogin } from '../hook/useLogin';

const LoginFormContainer = styled.div`
  margin-top: 120px;
  display: flex;
  width: 380px;
  min-width: 380px;
  flex-direction: column;
  align-items: center;
  align-self: stretch;
`;

const Title = styled.h1`
  color: #ffc52f;
  font-family: Pretendard;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%; /* 56px */
  letter-spacing: -1px;
  margin: 0 0 80px 0;
`;

// 버튼 컨테이너
const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;
`;

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

// 여백 컴포넌트
const Spacer = styled.div<{ height: number }>`
  height: ${({ height }) => height}px;
`;


export default function LoginForm() {
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin
  } = useLogin();

  return (
    <div>
      <LoginFormContainer>
        <Title>새로운 가족, 새로운 행복</Title>
        <FormGroup>
          <Label htmlFor="email">이메일</Label>
          <FormInput
            type="email"
            id="email"
            placeholder="이메일 입력"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormGroup>
        <Spacer height={32} />
        <FormGroup>
          <Label htmlFor="password">비밀번호</Label>
          <FormInput
            type="password"
            id="password"
            placeholder="비밀번호 입력"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormGroup>
        <Spacer height={40} />
        <ButtonContainer>
          <Button1 onClick={handleLogin}>로그인</Button1>
          <Button2>회원가입</Button2>
        </ButtonContainer>
        <Spacer height={8} />
        <LinkContainer>
          <StyledLinkComponent href="/find-password" text="비밀번호찾기" />
        </LinkContainer>
        <Spacer height={40} />
      </LoginFormContainer>
    </div>
  );
}