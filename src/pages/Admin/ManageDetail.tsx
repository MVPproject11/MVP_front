import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import ProfileComponent from "src/components/CaregiverMain/Matching/MatchingCard";
import { Home, Users, Settings } from 'lucide-react';
import { useElders } from 'src/hook/useElder';
import { useCaregiver } from 'src/hook/useCaregivers';
import { Caregiver } from 'src/types/caregiver';

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

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 2rem;
`;

const GridWrapper = styled.div`
  padding: 1.5rem;
`;

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
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

const ManageDetail = () => {
  const navigate = useNavigate();
  const { data: eldersData } = useElders();
  const { caregiver, loading, error: caregiverError } = useCaregiver();

  // 선택된 요양보호사 ID를 상태로 저장
  const [selectedCaregiverId, setSelectedCaregiverId] = useState<number | null>(null);

  // 버튼 클릭 시 실행
  const handleClick = (id: number) => {
    setSelectedCaregiverId(id);
    navigate('/ManageDetail2');
  };

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
          <GridWrapper>
            <Title>매칭 관리</Title>

            <Section>
              <Title>요양보호사 매칭 추천 리스트</Title>
              <Grid>
                {Array.isArray(caregiver) && caregiver.length > 0 ? (
                  caregiver.map((elder: Caregiver, index: number) => (
                    <button key={index} onClick={() => handleClick(elder.id)}>
                      <ProfileComponent
                        image={elder.caregiverProfile || '/api/placeholder/200/200'}
                        name={elder.name}
                        initialStatus={selectedCaregiverId === elder.id ? 'active' : 'inactive'}
                        onClick={() => handleClick(elder.id)}
                      />
                    </button>
                  ))
                ) : (
                  <div>매칭된 요양보호사가 없습니다.</div>
                )}
              </Grid>
            </Section>
          </GridWrapper>
        </MainContent>
      </ContentWrapper>
    </Container>
  );
};

export default ManageDetail;
