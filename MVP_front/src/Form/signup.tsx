import React from "react";
import styles from "./FindPasswordMain.module.css";
import SocialLogin from "../components/socialLogin";
import StyledLinkComponent from "../components/styledLinkComponent";
import Button1 from "../components/button1";
import Button2 from "../components/button2";
import { FormGroup, Label, FormInput } from "../components/formComponent";
import EmailInputGroup from "../components/emailComponent";
import InputAndButton from "../components/inputAndButton";

export default function FindPasswordMain() {
    console.log("FindPassword 컴포넌트 렌더링됨"); 
    return (
        <div>
            <div className={styles.findPasswordFormContainer}>
                <h1 className={styles.title}>회원가입</h1>
                <FormGroup>
                    <Label>이메일</Label>
                    <EmailInputGroup />
                </FormGroup>
                <div className={styles.spacer}  />
                <FormGroup>
                    <Label htmlFor="password">*비밀번호</Label>
                    <FormInput type="password" id="password" placeholder="8~16자리 숫자, 영어 비밀번호 입력"/>
                </FormGroup>
                <div className={styles.spacer} />
                <FormGroup>
                    <Label htmlFor="password">*비밀번호 확인</Label>
                    <FormInput type="password" id="password" placeholder="비밀번호 확인"/>
                </FormGroup>
                <div className={styles.spacer1}  />
                <Button1>비밀번호 찾기</Button1>
                <div className={styles.spacer2} />
                <div className={styles.linkContainer}>
                    <StyledLinkComponent href="/login" text="로그인" />
                    <StyledLinkComponent href="/find-id" text="아이디찾기" />
                </div>
                <div className={styles.spacer1}/>
                <SocialLogin />
            </div>
        </div>
    );
}
