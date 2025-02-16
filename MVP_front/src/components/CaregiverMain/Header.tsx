import React, { useState } from 'react';
import styled from 'styled-components';
import LOGO from "../../assets/image/logo.png";
import Alarm from "../../assets/image/alarm.png";

const HeaderContainer = styled.header`
  width: 80%;
  height: 4rem;
  border-bottom: 1px solid #e5e7eb;
  background-color: white;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 50;
  display: flex;
`;

const HeaderContent = styled.div`
  width: 100%;
  margin-top: 30px;
  max-width: full;
  height: 30%;
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
`;

const Logo = styled.span`
  font-size: 1rem;
  font-weight: bold;
  display: flex;
  align-items: center;

  span {
    color: #facc15;
  }
`;

const LogoImage = styled.img`
    width : 100px;
    height: 40px;
`

const AlarmImage = styled.img`
    width: 30px;
    height: 30px;
    margin-bottom: 10px;
`
const NotificationButton = styled.button`
  position: relative;
  padding: 0.5rem;
  border-radius: none;
  background-color: transparent;
  border: none;
  margin-bottom: 10px;
  
`;

const Header = () => {
  const [notificationCount] = useState(1);
  
  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo>
          <LogoImage src={LOGO} alt="로고"/>
        </Logo>

        <NotificationButton aria-label="알림">
          <AlarmImage src={Alarm} alt="알림 아이콘" className='w-6 h-6 text-gray-600'/>
        </NotificationButton>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
