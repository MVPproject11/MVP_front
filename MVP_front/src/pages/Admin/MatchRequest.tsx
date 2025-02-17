import React from "react";
import ProfileComponent from "src/components/CaregiverMain/Matching/MatchingCard";
import styled from 'styled-components';
import { Home, Users, Settings } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

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
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #f3f4f6;
  }
`;

const GridWrapper = styled.div`
  padding: 1.5rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

interface MatchingCardProps {
    image: string;
    name: string;
    status: 'active' | 'inactive';
}

const dummyData: MatchingCardProps[] = [
  { image: '/api/placeholder/200/200', name: '홍길동 어르신', status: 'active' },
  { image: '/api/placeholder/200/200', name: '홍길동 어르신', status: 'active' },
  { image: '/api/placeholder/200/200', name: '홍길동 어르신', status: 'active' },
  { image: '/api/placeholder/200/200', name: '김영희 어르신', status: 'inactive' },
  { image: '/api/placeholder/200/200', name: '김영희 어르신', status: 'inactive' },
  { image: '/api/placeholder/200/200', name: '김영희 어르신', status: 'inactive' },
];

const MatchRequest = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/matchingDetail');
  }
  return (
    <Container>
      <Header>
        <span className="text-xl font-bold">함께돌봄</span>
        <button>🔔</button>
      </Header>
      <ContentWrapper>
        <Sidebar>
          <Nav>
            <NavItem href="/SeniorRegistration">
              <Home size={20} style={{ marginRight: '0.75rem' }} /> 어르신 정보 등록
            </NavItem>
            <NavItem href="/matchingDetail" active>
              <Users size={20} style={{ marginRight: '0.75rem' }} /> 매칭 요청
            </NavItem>
            <NavItem href="/matching">
              <Settings size={20} style={{ marginRight: '0.75rem' }} /> 매칭 관리
            </NavItem>
            <NavItem href="/settings">
              <Settings size={20} style={{ marginRight: '0.75rem' }} /> 내내 정보 관리
            </NavItem>
          </Nav>
        </Sidebar>
        <MainContent>
          <GridWrapper>
            <Title>매칭 요청</Title>
            <Grid>
              {dummyData.map((card, index) => (
                <button onClick={handleClick}>
                    <ProfileComponent 
                        key={index} 
                        image={card.image} 
                        name={card.name} 
                        status={card.status}
                    />
                 </button>
              ))}
            </Grid>
          </GridWrapper>
        </MainContent>
      </ContentWrapper>
    </Container>
  );
};

export default MatchRequest;
