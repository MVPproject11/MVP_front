import React, { useState } from 'react';
import styled from 'styled-components';
import LOGO from "../../assets/image/logo.png";
import Alarm from "../../assets/image/alarm.png";

const HeaderContainer = styled.header`
  width: 100%;
  height: 4rem;
  border-bottom: 1px solid #e5e7eb;
  background-color: white;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 50;
  display: flex;
  justify-content: center;
`;

const HeaderContent = styled.div`
  width: 100%;
  max-width: 1120px;
  height: 100%;
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.span`
  font-size: 1.25rem;
  font-weight: bold;
  display: flex;
  align-items: center;

  span {
    color: #facc15;
  }
`;

const NotificationButton = styled.button`
  position: relative;
  padding: 0.5rem;
  border-radius: 9999px;
  background: transparent;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: #f3f4f6;
  }
`;

const NotificationBadge = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  width: 1.25rem;
  height: 1.25rem;
  background-color: #ef4444;
  color: white;
  font-size: 0.75rem;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Header = () => {
  const [notificationCount] = useState(1);
  
  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo>
          <img src={LOGO} alt="로고" className='w-6 h-10'/>
        </Logo>

        <NotificationButton aria-label="알림">
          <img src={Alarm} alt="알림 아이콘" className='w-6 h-6 text-gray-600'/>
          {notificationCount > 0 && (
            <NotificationBadge>{notificationCount}</NotificationBadge>
          )}
        </NotificationButton>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
