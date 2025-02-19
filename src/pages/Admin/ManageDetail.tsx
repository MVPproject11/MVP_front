import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import ProfileComponent from "src/components/CaregiverMain/Matching/MatchingCard";
import { Home, Users, Settings } from 'lucide-react';
import TagButton from 'src/components/Admin/TagButton';
import {FormSection, Input, InputGroup} from 'src/components/Admin/FormSection';
import { Caregiver } from 'src/types/caregiver';
import { getCaregiver } from 'src/api/caregivers';
import { useElders } from 'src/hook/useElder';  // useElders hook 추가
import { useMatchings } from 'src/hook/useElder'; // 매칭에 대한 hook 추가
import { useCaregiver } from 'src/hook/useCaregivers';

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

const FormField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  label {
    font-size: 0.875rem;
    font-weight: 500;
  }

  input {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #d1d5db;
    border-radius: 0.375rem;
  }
`;

const GenderButton = styled.button<{ active: boolean; disabled?: boolean }>`
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  border: 1px solid ${(props) => (props.active ? '#eab308' : '#e5e7eb')};
  background-color: ${(props) => (props.active ? '#fef9c3' : 'transparent')};
  color: ${(props) => (props.active ? '#eab308' : '#374151')};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};

  &:hover {
    background-color: ${(props) => (!props.disabled && !props.active ? '#f3f4f6' : 'transparent')};
  }
`;

const CertificationField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  label {
    font-size: 0.875rem;
    font-weight: 500;
  }

  .inputs {
    display: flex;
    gap: 0.5rem;
  }

  input {
    padding: 0.5rem;
    border: 1px solid #d1d5db;
    border-radius: 0.375rem;
  }
`;

const Button = styled.button<{ primary?: boolean }>`
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  border: 1px solid #D1D5DB;
  background-color: ${({ primary }) => (primary ? '#FBBF24' : 'transparent')};
`;

const AddressButton = styled.button`
  padding: 0.5rem 1rem;
  border: 1px solid #eab308;
  background-color: transparent;
  color: #eab308;
  border-radius: 0.375rem;

  &:hover {
    background-color: #fef9c3;
  }
`;

const Nav = styled.nav`
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

const ImageContainer = styled.div`
  border: 2px dashed #d1d5db;
  border-radius: 0.5rem;
  padding: 2rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PlusIcon = styled.span`
  color: #facc15;
  font-size: 2rem;
  margin-bottom: 0.5rem;
`;

const PlaceholderText = styled.span`
  color: #6b7280;
`;

const ProfileImage = styled.img`
  max-width: 10rem;
  margin: 0 auto;
`;

interface MatchingCardProps {
    image: string;
    name: string;
    status: 'active' | 'inactive';
}

const ManageDetail = () => {
  const navigate = useNavigate();
  const { data: eldersData, isLoading, isError, error } = useElders();
  const { caregiver, loading, error: caregiverError } = useCaregiver();
    const handleClick = () => {
      navigate('/ManageDetail2');
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
                <FormSection title="사진" required>
                <ImageContainer>
                    {eldersData.image ? (
                        <ProfileImage src={eldersData.image} alt="Profile" />
                    ) : (
                        <div>
                        <PlusIcon>+</PlusIcon>
                        <PlaceholderText>이미지를 불러오는 중...</PlaceholderText>
                        </div>
                    )}
                </ImageContainer>
                </FormSection>

            <FormWrapper>
              <Section>
              </Section>
              <Section>
                <Title>요양보호사 매칭 추천 리스트</Title>
                <Grid>
                {caregiver ? caregiver.map((elder: Caregiver, index: number) => (
                    <button key={index} onClick={handleClick}>
                      <ProfileComponent
                        image={caregiver.caregiverProfile || '/api/placeholder/200/200'}
                        name={caregiver.name}
                        initialStatus={selectedCaregiverId === caregiver.id ? 'active' : 'inactive'}
                        onClick={() => handleClick(caregiver.id)}
                      />
                    </button>
                  )) : <div>매칭된 요양보호사가 없습니다.</div>}
                </Grid>
              </Section>
            </FormWrapper>
          </GridWrapper>
        </MainContent>
      </ContentWrapper>
    </Container>
  );
};


export default ManageDetail;
