import React, { useState } from 'react';
import styled from 'styled-components';
import { Home, Users, Settings } from 'lucide-react';
import { UserData } from 'src/types/User';

const Container = styled.div`
  min-height: 100vh;
  background-color: #f9fafb;
  display: flex;
  flex-direction: column;
`;

const Header = styled.header`
  height: 4rem;
  background-color: white;
  border-bottom: 1px solid #e5e7eb;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.5rem;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex: 1;
`;

const Sidebar = styled.aside`
  width: 15rem;
  min-height: calc(100vh - 4rem);
  background-color: white;
  border-right: 1px solid #e5e7eb;
  padding: 1.5rem;
`;

const MainContent = styled.main`
  flex: 1;
  padding: 2rem;
  max-width: 64rem;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 2rem;
`;

const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 8px;
  object-fit: cover;
`;

const ProfileInfo = styled.div`
  flex: 1;
`;

const InfoRow = styled.div`
  margin-bottom: 12px;
`;

const Label = styled.p`
  font-weight: bold;
  color: #4b5563;
`;

const Tag = styled.span`
  display: inline-block;
  background: #e5e7eb;
  color: #374151;
  padding: 6px 12px;
  border-radius: 6px;
  font-size: 14px;
  margin-right: 6px;
`;

const Button = styled.button`
  width: 100%;
  background: #facc15;
  color: white;
  font-size: 16px;
  padding: 12px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: #eab308;
  }
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const NavItem = styled.a<{ active?: boolean }>`
  display: flex;
  align-items: center;
  padding: 0.75rem 1rem;
  color: ${(props) => (props.active ? '#eab308' : '#374151')};
  background-color: ${(props) => (props.active ? '#fef9c3' : 'transparent')};
  border-radius: 0.5rem;
  text-decoration: none;
  &:hover {
    background-color: #f3f4f6;
  }
`;

const MatchingDetailTwo = () => {
  const [userData, setUserData] = useState<UserData | null>(null);

  return (
    <Container>
      <Header>
        <span className="text-xl font-bold">함께돌봄</span>
        <button>🔔</button>
      </Header>

      <ContentWrapper>
        <Sidebar>
          <Nav>
            <NavItem href="">
              <Home size={20} style={{ marginRight: '0.75rem' }} /> 내 프로필
            </NavItem>
            <NavItem href="/work-settings">
              <Users size={20} style={{ marginRight: '0.75rem' }} /> 근무 조건 설정
            </NavItem>
            <NavItem href="/matching" active>
              <Settings size={20} style={{ marginRight: '0.75rem' }} /> 매칭 관리
            </NavItem>
            <NavItem href="/settings">
              <Settings size={20} style={{ marginRight: '0.75rem' }} /> 회원 정보 관리
            </NavItem>
          </Nav>
        </Sidebar>

        <MainContent>
          <Title>매칭 관리</Title>
          {userData ? (
            <>
              <ProfileImage src={userData.imageUrl} alt="Profile" />
              <p style={{ textAlign: "center", marginTop: 8, background: "#facc15", color: "white", padding: 8, borderRadius: 6 }}>
                {userData.name} 요양보호사
              </p>
              <ProfileInfo>
                <InfoRow>
                  <Label>이름</Label>
                  <p>{userData.name}</p>
                </InfoRow>
                <InfoRow>
                  <Label>연락처</Label>
                  <p>{userData.phone}</p>
                </InfoRow>
                <InfoRow>
                  <Label>성별</Label>
                  <Tag>{userData.gender}</Tag>
                </InfoRow>
                <InfoRow>
                  <Label>근무 지역</Label>
                  <div>
                    {userData.workAreas.map((area, index) => (
                      <Tag key={index}>{area}</Tag>
                    ))}
                  </div>
                </InfoRow>
                <InfoRow>
                  <Label>희망 시급</Label>
                  <p>
                    최소 <strong>{userData.minWage}</strong>원 ~ 최대 <strong>{userData.maxWage}</strong>원
                  </p>
                </InfoRow>
                <Button>매칭 요청</Button>
              </ProfileInfo>
            </>
          ) : (
            <p>사용자 정보가 없습니다.</p>
          )}
        </MainContent>
      </ContentWrapper>
    </Container>
  );
};

export default MatchingDetailTwo;
