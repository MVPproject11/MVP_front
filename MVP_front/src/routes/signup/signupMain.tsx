import React from "react";
import styled from "styled-components";
import './signupStyle.css';
import RoleButton from "../../components/roleButton"; 


const Title = styled.h1`
    color: #FFC52F;
    font-family: Pretendard;
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: 140%; /* 56px */
    letter-spacing: -1px;
    margin: 0;
`;

const RoleButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: 8px;
    align-self: stretch;
`;


export default function SignupMain(){
    return(
        <div className="container">
            <Title>회원가입</Title>
            <p>어느 계정으로 회원가입하시겠습니까?</p>
            <RoleButtonContainer>
                <RoleButton>요양보호사</RoleButton>
                <RoleButton>관리자</RoleButton>
            </RoleButtonContainer>
        </div>
    );
}