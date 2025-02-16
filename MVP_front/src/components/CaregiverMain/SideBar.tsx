import React, { useState } from "react";
import styled from "styled-components";
import User from "../../assets/image/User.png";
import WorkSetting from "../../assets/image/WorkSetting.png";
import Package from "../../assets/image/Package.png";
import Settings from "../../assets/image/Settings.png";
import { useNavigate } from "react-router-dom";

const SidebarContainer = styled.div`
  width: 16rem;
  min-height: 100vh;
  background-color: white;
  border-right: 1px solid #e5e7eb;
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  padding: 1rem;
  border-bottom: 1px solid #e5e7eb;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: #f9fafb;
  }
`;

const CollapsibleContent = styled.div<{ isCollapsed: boolean }>`
  transition: all 0.3s ease-in-out;
  height: ${(props) => (props.isCollapsed ? '0' : 'auto')};
  overflow: hidden;
`;

const ProfileSection = styled.div`
  padding: 1rem;
`;

const ProfileCard = styled.div`
  background-color: #fffbeb;
  border-radius: 0.5rem;
  padding: 1rem;
  text-align: center;
`;

const ProfileImage = styled.img`
  width: 6rem;
  height: 6rem;
  border-radius: 0.5rem;
  margin-bottom: 0.5rem;
`;

const RoleText = styled.div`
  color: #6b7280;
  font-size: 0.875rem;
`;

const NameText = styled.div`
  font-weight: 500;
`;

const LevelStars = styled.div`
  color: #fbbf24;
  margin-top: 0.25rem;
`;

const Nav = styled.nav`
  margin-top: 0.5rem;
`;

const MenuItemContainer = styled.div<{ isActive: boolean }>`
  align-items: center;
  padding: 0.75rem 1rem;
  cursor: pointer;
  transition: background-color 0.2s;
  background-color: ${(props) => (props.isActive ? '#fffbeb' : 'transparent')};
  &:hover {
    background-color: #f9fafb;
  }
`;

const MenuIcon = styled.span<{ isActive: boolean }>`
  margin-right: 0.75rem;
  color: ${(props) => (props.isActive ? '#fbbf24' : '#6b7280')};
`;

export default function SideBar() {
    const navigate = useNavigate();
    const [profile] = useState({
        name: '김재현',
        role: '요양보호사',
        imageUrl: '/api/placeholder/150/150',
        level: 2,
    });

    const [isCollapsed, setIsCollapsed] = useState(false);
    const [activeMenuItem, setActiveMenuItem] = useState('내 프로필');

    const handleMenuItemClick = (menuItem: string, path: string) => {
        setActiveMenuItem(menuItem);
        navigate(path);
      };

    const handleProfileClick = () => {
        setIsCollapsed(!isCollapsed);
        setActiveMenuItem('내 프로필');
    };

    return (
        <SidebarContainer>
            <Header onClick={() => setIsCollapsed(!isCollapsed)}>
                <h1 className="text-xl font-bold">마이페이지</h1>
            </Header>

            <CollapsibleContent isCollapsed={isCollapsed}>
                <ProfileSection>
                    <ProfileCard>
                        <ProfileImage src={profile.imageUrl} alt="Profile" />
                        <RoleText>{profile.role}</RoleText>
                        <NameText>{profile.name}</NameText>
                        <LevelStars>{'★'.repeat(profile.level || 0)}</LevelStars>
                    </ProfileCard>
                </ProfileSection>
            </CollapsibleContent>

            <Nav>
                <MenuItem
                    icon={<img src={User} alt="User Icon" className="w-5 h-5" />}
                    text="내 프로필"
                    isActive={activeMenuItem === '내 프로필'}
                    onClick={handleProfileClick}
                />
                <MenuItem
                    icon={<img src={WorkSetting} alt="Work Setting Icon" className="w-5 h-5" />}
                    text="근무 조건 설정"
                    isActive={activeMenuItem === '근무 조건 설정'}
                    onClick={() => handleMenuItemClick('근무 조건 설정', '/work-settings')}
                />
                <MenuItem
                    icon={<img src={Package} alt="Package Icon" className="w-5 h-5" />}
                    text="매칭 관리"
                    isActive={activeMenuItem === '매칭 관리'}
                    onClick={() => handleMenuItemClick('매칭 관리', '/matching')}
                />
                <MenuItem
                    icon={<img src={Settings} alt="Settings Icon" className="w-5 h-5" />}
                    text="회원 정보 관리"
                    isActive={activeMenuItem === '회원 정보 관리'}
                    onClick={() => handleMenuItemClick('회원 정보 관리', '/settings')}
                />
            </Nav>
        </SidebarContainer>
    );
};

interface MenuItemProps {
    icon: React.ReactNode;
    text: string;
    isActive?: boolean;
    onClick?: () => void;
}

const MenuItem: React.FC<MenuItemProps> = ({ icon, text, isActive = false, onClick }) => {
    return (
        <MenuItemContainer isActive={isActive} onClick={onClick}>
            <MenuIcon isActive={isActive}>{icon}</MenuIcon>
            <span className={isActive ? 'font-medium' : ''}>{text}</span>
        </MenuItemContainer>
    );
};
