import React, { useState } from "react";
import MatchingCard from "src/components/CaregiverMain/Matching/MatchingCard";
import styled from 'styled-components';
import { Home, Users, Settings } from 'lucide-react';
import { useElders } from "src/hook/useElder";
import { useCaregivers } from "src/hook/useCaregivers";
import { Elder } from "src/types/elder";
import { Caregiver } from "src/types/caregiver";

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

const ProfileWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;

  img {
    border-radius: 50%;
    width: 50px;
    height: 50px;
    object-fit: cover;
  }

  h4 {
    font-size: 1rem;
    font-weight: 600;
  }
`;

const CaregiversForElder = ({ elderId }: { elderId: number }) => {
  const { data: caregivers, isLoading: caregiversLoading, isError: caregiversError, error: caregiversErrorData } = useCaregivers(elderId);
  const [selectedCaregiverId, setSelectedCaregiverId] = useState<number | null>(null);

  const handleClick = (caregiverId: number) => {
    setSelectedCaregiverId(caregiverId);
  };

  if (caregiversLoading) return <div>Loading caregivers...</div>;
  if (caregiversError) return <div>Error loading caregivers: {caregiversErrorData.message}</div>;

  return (
    <Grid>
      {Array.isArray(caregivers) && caregivers.length > 0
        ? caregivers.map((caregiver: Caregiver) => (
            <MatchingCard
              key={caregiver.id}
              image={caregiver.caregiverProfile}
              name={caregiver.name}
              initialStatus={selectedCaregiverId === caregiver.id ? 'active' : 'inactive'}
              onClick={() => handleClick(caregiver.id)}
            />
          ))
        : null}
    </Grid>
  );
};

const matchingManage = () => {
  const { data: elders, isLoading: eldersLoading, isError: eldersError, error: eldersErrorData } = useElders();

  if (eldersLoading) return <div>Loading...</div>;
  if (eldersError) return <div>Error loading elders: {eldersErrorData.message}</div>;

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
            <NavItem href="/matchingDetail">
              <Users size={20} style={{ marginRight: '0.75rem' }} /> 매칭 요청
            </NavItem>
            <NavItem href="/matchingManage" active>
              <Settings size={20} style={{ marginRight: '0.75rem' }} /> 매칭 관리
            </NavItem>
            <NavItem href="/myprofile">
              <Settings size={20} style={{ marginRight: '0.75rem' }} /> 내 정보 관리
            </NavItem>
          </Nav>
        </Sidebar>
        <MainContent>
          <Title>매칭 관리</Title>
          {elders.map((elder: Elder) => (
            <Section key={elder.id}>
              <ProfileWrapper>
                <img src={elder.elderPhoto} alt={`${elder.name} 어르신`} />
                <h4>{elder.name} 어르신</h4>
              </ProfileWrapper>
              <CaregiversForElder elderId={elder.id} />
            </Section>
          ))}
        </MainContent>
      </ContentWrapper>
    </Container>
  );
};

export default matchingManage;
