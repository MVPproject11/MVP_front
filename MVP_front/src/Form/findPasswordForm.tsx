import React from "react";
import styled from "styled-components";
import SocialLogin from "../components/socialLogin";
import StyledLinkComponent from "../components/styledLinkComponent";
import LoginButton from "../components/button1";
import SignupButton from "../components/button2";
import { FormGroup, Label, FormInput } from "../components/formComponent";
import EmailInputGroup from "../components/emailComponent";

const FindPasswordFormContainer = styled.div`
    margin-top: 120px;
    display: flex;
    width: 380px;
    min-width: 380px;
    flex-direction: column;
    align-items: center;
    align-self: stretch;
`;


const Title = styled.h1`
    color: #FFC52F;
    font-family: Pretendard;
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: 140%; /* 56px */
    letter-spacing: -1px;
    margin: 0 0 80px 0;
`;

//버튼 컨테이너
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

//  여백 컴포넌트
const Spacer = styled.div<{ height: number }>`
  height: ${({ height }) => height}px;
`;

export default function FindPasswordMain(){
    console.log("FindPassword 컴포넌트 렌더링됨"); // 디버깅용
    return(
        <div>
            <FindPasswordFormContainer>
                <Title>비밀번호 찾기</Title>
                {/* 아이디 */}
                <FormGroup>
                    <Label htmlFor="username">아이디</Label>
                    <FormInput type="text" id="username" placeholder="아이디 입력" />
                </FormGroup>
                <Spacer height={32}/>
                {/* 이메일 */}
                <FormGroup>
                    <Label>이메일</Label>
                    <EmailInputGroup />
                </FormGroup>
                <Spacer height={32}/>
                {/* 인증번호 */}
                <FormGroup>
                    <label htmlFor="email">인증번호</label>
                    <FormInput type="email" id="email" placeholder="이메일 입력" />
                </FormGroup>
                <Spacer height={40}/>
                <LoginButton>비밀번호 찾기</LoginButton>
                <Spacer height={8}/>
                <LinkContainer>
                    <StyledLinkComponent href="/login" text="로그인" />
                    <StyledLinkComponent href="/find-id" text="아이디찾기" />
                </LinkContainer>
                
                <Spacer height={40}/>
                <SocialLogin/>
            </FindPasswordFormContainer>
        </div>
    )
}