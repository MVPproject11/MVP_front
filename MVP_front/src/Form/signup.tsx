import React from "react";
import styled from "styled-components";
import SocialLogin from "../components/socialLogin";
import StyledLinkComponent from "../components/styledLinkComponent";
import Button1 from "../components/button1";
import Button2 from "../components/button2";
import { FormGroup, Label, FormInput } from "../components/formComponent";
import EmailInputGroup from "../components/emailComponent";
import InputAndButton from "../components/inputAndButton";


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

//입력&버튼
const InputAndButtonContainer = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  gap: 23px; /* input과 버튼 간의 간격 */
`;

// 버튼
const Hello = styled.div`
    width: 119px;
    height: 30px;
`;

export default function FindPasswordMain(){
    console.log("FindPassword 컴포넌트 렌더링됨"); // 디버깅용
    return(
        <div>
            <FindPasswordFormContainer>
                <Title>회원가입</Title>
                {/* 아이디 */}
                <FormGroup>
                    <Label>이메일</Label>
                    <EmailInputGroup />
                </FormGroup>
                <Spacer height={32}/>
                {/* 비밀번호 */}
                <FormGroup>
                    <Label htmlFor="password">*비밀번호</Label>
                    <FormInput type="password" id="password" placeholder="8~16자리 숫자, 영어 비밀번호 입력"/>
                </FormGroup>
                <Spacer height={32}/>
                {/* 비밀번호 확인 */}
                <FormGroup>
                    <Label htmlFor="password">*비밀번호 확인</Label>
                    <FormInput type="password" id="password" placeholder="비밀번호 확인"/>
                </FormGroup>
                <Spacer height={40}/>
                <Button1>비밀번호 찾기</Button1>
                <Spacer height={8}/>
                <LinkContainer>
                    <StyledLinkComponent href="/login" text="로그인" />
                    <StyledLinkComponent href="/find-id" text="아이디찾기" />
                </LinkContainer>
                <Spacer height={40}/>
                <SocialLogin/>
            </FindPasswordFormContainer>
        </div>
    );
}