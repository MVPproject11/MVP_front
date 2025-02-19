import React from "react";
import ProfileComponent from "src/components/CaregiverMain/Matching/MatchingCard";
import styled from 'styled-components';
import { Home, Users, Settings } from 'lucide-react';
import Add from "../../assets/image/add.png";
import { useNavigate } from 'react-router-dom';
import { useElders, useElder } from "src/hook/useElder";

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

interface Elder {
  id: number;
  image: string;
  name: string;
  status: 'active' | 'inactive';
}

const SeniorRegistration = () => {
  const navigate = useNavigate();
  const { data: eldersData, isLoading, isError, error } = useElders();

  const handleClick = () => {
    navigate('/AddDetail');
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
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
            <NavItem href="/SeniorRegistration" active>
                          <Home size={20} style={{ marginRight: '0.75rem' }} /> 어르신 정보 등록
                        </NavItem>
                        <NavItem href="/matchrequest">
                          <Users size={20} style={{ marginRight: '0.75rem' }} /> 매칭 요청
                        </NavItem>
                        <NavItem href="/matching" >
                          <Settings size={20} style={{ marginRight: '0.75rem' }} /> 매칭 관리
                        </NavItem>
                        <NavItem href="/myprofile">
                          <Settings size={20} style={{ marginRight: '0.75rem' }} /> 내 정보 관리
                        </NavItem>
          </Nav>
        </Sidebar>
        <MainContent>
          <GridWrapper>
            <Title>어르신 정보 등록</Title>
            <img
              src={Add}
              alt="Add"
              style={{ width: '100%', cursor: 'pointer' }}
              onClick={handleClick}
            />
            <Grid>
              {eldersData.map((elder: Elder, index: number) => (
                <ElderProfile key={index} elderId={elder.id} />
              ))}
            </Grid>
          </GridWrapper>
        </MainContent>
      </ContentWrapper>
    </Container>
  );
};

const ElderProfile = ({ elderId }: { elderId: number }) => {
  const { data: elderData, isLoading, isError, error } = useElder(elderId);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h4>{elderData.name}</h4>
      <img src={elderData.image} alt={elderData.name} />
      <p>Status: {elderData.status}</p>
    </div>
  );
};

export default SeniorRegistration;
