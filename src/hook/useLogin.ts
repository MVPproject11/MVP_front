import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginAPI } from '../api/loginAPI';
import useAuthStore from '../store/authStore';
import {jwtDecode} from 'jwt-decode';

interface TokenPayload {
  email: string;
  role: 'socialworker' | 'caregiver';  
}

export const useLoginForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuthStore();

  const handleLogin = async () => {
    try {
      if (!email || !password) {
        alert("이메일과 비밀번호를 모두 입력해주세요.");
        return;
      }

      console.log('입력한 이메일:', email);  // 입력한 이메일 출력
      console.log('입력한 비밀번호:', password);

      const response = await loginAPI(email, password);
      console.log('서버 응답:', response);
      
      if (response.token) {
        // Use the correct import and method to decode the token
        const decodedToken = jwtDecode<TokenPayload>(response.token);
        
        login({
          email: decodedToken.email,
          role: decodedToken.role
        }, response.token);

        alert("로그인 성공!");
        
        if (decodedToken.role === 'caregiver') {
          navigate("/BomListenTwo");
        } else {
          navigate("/BomListen");
        }
      } else {
        throw new Error("인증 토큰이 없습니다.");
      }
    } catch (error: any) {
      console.error("로그인 에러:", error);
      alert(error.message || "로그인에 실패했습니다.");
    }
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin
  };
};
