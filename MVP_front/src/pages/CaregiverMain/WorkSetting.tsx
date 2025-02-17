import styled from 'styled-components';
import { Home, Users, Settings } from 'lucide-react';
import React from 'react';

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

const Sidebar = styled.aside`
  width: 15rem;
  min-height: calc(100vh - 4rem);
  background-color: white;
  border-right: 1px solid #e5e7eb;
  padding: 1.5rem;
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

const ContentWrapper = styled.div`
  display: flex;
  flex: 1;
`;

const MainContent = styled.main`
  flex: 1;
  padding: 2rem;
  max-width: 64rem;
`;

const Section = styled.div`
  margin-bottom: 2rem;
`;

const Title = styled.h3`
  font-size: 1.125rem;
  font-weight: 500;
  margin-bottom: 1rem;
`;

const TagContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
`;

const TagButton = styled.button<{ isAddButton?: boolean }>`
  padding: 0.5rem 1rem;
  border: 1px solid #e5e7eb;
  border-radius: 9999px;
  font-size: 0.875rem;
  background-color: ${(props) => (props.isAddButton ? '#fef9c3' : 'white')};
  cursor: pointer;
  &:hover {
    background-color: #f3f4f6;
  }
`;

const Input = styled.input`
  width: 5rem;
  padding: 0.5rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.375rem;
  text-align: center;
`;

const WorkConditions = () => {
  return (
    <Container>
      <Header>
        <span className="text-xl font-bold">함께돌봄</span>
        <button>🔔</button>
      </Header>
      <ContentWrapper>
        <Sidebar>
          <Nav>
            <NavItem href="#">
              <Home size={20} style={{ marginRight: '0.75rem' }} /> 내 프로필
            </NavItem>
            <NavItem href="/work-settings" active>
              <Users size={20} style={{ marginRight: '0.75rem' }} /> 근무 조건 설정
            </NavItem>
            <NavItem href="/matching">
              <Settings size={20} style={{ marginRight: '0.75rem' }} /> 매칭 관리
            </NavItem>
            <NavItem href="/settings">
              <Settings size={20} style={{ marginRight: '0.75rem' }} /> 회원 정보 관리
            </NavItem>
          </Nav>
        </Sidebar>
        <MainContent>
          <Section>
            <Title>근무 가능 지역</Title>
            <TagContainer>
              <TagButton>잠실동/서초</TagButton>
              <TagButton>압구정동/강남</TagButton>
              <TagButton>반포동/서초</TagButton>
              <TagButton isAddButton={true}>+ 지역추가</TagButton>
            </TagContainer>
          </Section>
          <Section>
            <Title>근무 가능 시간</Title>
            <TagContainer>
              <TagButton>월 / 화요일중</TagButton>
              <TagButton>목 / 오전, 오후</TagButton>
              <TagButton isAddButton={true}>+ 시간추가</TagButton>
            </TagContainer>
          </Section>
          <Section>
            <Title>희망시급</Title>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <span>최소</span>
              <Input type="text" defaultValue="12000" /> 원
              <span>~</span>
              <span>최대</span>
              <Input type="text" defaultValue="15000" /> 원
            </div>
          </Section>
        </MainContent>
      </ContentWrapper>
    </Container>
  );
};

export default WorkConditions;