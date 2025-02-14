import React from "react";
import styled from "styled-components";
import KakaoIcon from "../img/kakao.png"; // 이미지 파일 import
import NaverIcon from "../img/naver.png"; // 이미지 파일 import

const SocialLoginContainer = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    gap: 32px;
`;

//SNS 계정으로 로그인
const TextContainer = styled.div`
  display: flex; /* Flexbox로 정렬 */
  align-items: center; /* 세로 중앙 정렬 */
  width: 100%;
  gap: 23px;
  height: 20px; /* 전체 높이 */
`;

const Line = styled.div`
  height: 1px;
  flex: 1 0 0;
  background: #AAA;
`;

const Text = styled.span`
    color: #AAA;
    text-align: center;
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 140%; /* 19.6px */
    letter-spacing: -0.35px;
`;

// 소셜로그인 아이콘

const IconContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 32px;
    align-self: stretch;
`;

const IconLink = styled.a`
  display: inline-block;
  width: 50px; /* 아이콘 너비 */
  height: 50px; /* 아이콘 높이 */
  border-radius: 50%; /* 원형으로 만들기 */
  overflow: hidden; /* 원형 밖 이미지 숨기기 */
  cursor: pointer;

  img {
    width: 100%; /* 이미지 크기 조정 */
    height: 100%;
    object-fit: cover; /* 이미지 비율 유지하며 채우기 */
  }
`;

//  여백 컴포넌트
const Spacer = styled.div<{ height: number }>`
  height: ${({ height }) => height}px;
`;

export default function SocialLogin(){
    console.log("소셜로그인 렌더링됨");
    return(
        <SocialLoginContainer>
            <TextContainer>
                <Line/>
                <Text>SNS 계정으로 로그인</Text>
                <Line/>
            </TextContainer>
            {/* 카카오 로그인 */}
            <IconContainer>
                <IconLink href="http://naver.com" target="_blank" rel="noopener noreferrer">
                    <img src={KakaoIcon} alt="카카오 로그인" />
                </IconLink>

                {/* 네이버 로그인 */}
                <IconLink href="http://naver.com" target="_blank" rel="noopener noreferrer">
                    <img src={NaverIcon} alt="카카오 로그인" />
                </IconLink>
            </IconContainer>
        </SocialLoginContainer>
    )
}