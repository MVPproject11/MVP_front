import React, { useState } from "react";
import ElderCard from "src/components/CaregiverMain/Matching/MatchingCard";  // 노인 카드 컴포넌트로 수정
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";
import { Home, Users, Settings } from 'lucide-react';
import { useElders } from "../../hook/useElder";  // 어르신 목록 가져오는 훅
import { useCaregivers } from "../../hook/useCaregivers";  // Caregiver 훅

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

const Matching = () => {
  const navigate = useNavigate();
  const { data: elders, isLoading, error } = useElders();  // 어르신 데이터 가져오기
  const [selectedElderId, setSelectedElderId] = useState<number | null>(null);

  const handleClick = (elderId: number) => {
    setSelectedElderId(elderId);
    navigate(`/ManageDetail/${elderId}`);  // 해당 어르신의 상세 페이지로 이동
  };

  if (isLoading) return <p>로딩 중...</p>;
  if (error) return <p>데이터를 불러오는 중 오류 발생!</p>;

  return (
    <Container>
      <Header>
        <span className="text-xl font-bold">함께돌봄</span>
        <button>🔔</button>
      </Header>
      <ContentWrapper>
        <Sidebar>
          <Nav>
            <NavItem href="#" active>
              <Home size={20} style={{ marginRight: '0.75rem' }} /> 내 프로필
            </NavItem>
            <NavItem href="/work-settings">
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
          <GridWrapper>
            <Title>매칭 관리</Title>
            <Grid>
              {elders?.map((elder: any) => (
                <ElderCard 
                  key={elder.id} 
                  image={elder.elderPhoto || '/default-profile.png'}  // 기본 이미지
                  name={elder.name} 
                  initialStatus={'inactive'}
                  onClick={() => handleClick(elder.id)}  // 클릭 시 상세 페이지로 이동
                />
              ))}
            </Grid>
          </GridWrapper>
        </MainContent>
      </ContentWrapper>
    </Container>  
  );
};

export default Matching;
