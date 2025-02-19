import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import ProfileComponent from "src/components/CaregiverMain/Matching/MatchingCard";
import { Home, Users, Settings } from 'lucide-react';
import TagButton from 'src/components/Admin/TagButton';
import {FormSection, Input, InputGroup} from 'src/components/Admin/FormSection';

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

const dummyData: MatchingCardProps[] = [
    { image: '/api/placeholder/200/200', name: '홍길동 어르신', status: 'active' },
    { image: '/api/placeholder/200/200', name: '홍길동 어르신', status: 'active' },
    { image: '/api/placeholder/200/200', name: '홍길동 어르신', status: 'active' },
    { image: '/api/placeholder/200/200', name: '김영희 어르신', status: 'inactive' },
    { image: '/api/placeholder/200/200', name: '김영희 어르신', status: 'inactive' },
    { image: '/api/placeholder/200/200', name: '김영희 어르신', status: 'inactive' },
  ];

const ManageDetail = () => {
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();
    const handleClick = () => {
      navigate('/ManageDetail2');
    }

  const [memberInfo, setMemberInfo] = useState({
    name: '김재현',
    phone: '01012345678',
    gender: 'male',
    address: '서울시 서초구 잠원동 롯데캐슬아파트 000동 0000호',
    certifications: {
      caregiving: { number: '1234567', year: '2025' },
      social: { number: '12345', year: '1' },
      nursing: { number: '1234567', year: '2025', cityCode: '' },
      nursingHome: { number: '123456' },
    },
    preferences: { carePossible: false, sellPossible: false },
  });

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
                    {image ? (
                        <ProfileImage src={image} alt="Profile" />
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
              </Section>
            </FormWrapper>
          </GridWrapper>
        </MainContent>
      </ContentWrapper>
    </Container>
  );
};


export default ManageDetail;
