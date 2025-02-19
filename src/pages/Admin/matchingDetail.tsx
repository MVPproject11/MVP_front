import React, {useState} from "react";
import ProfileComponent from "src/components/CaregiverMain/Matching/MatchingCard";
import styled from 'styled-components';
import { Home, Users, Settings } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import YellowToggleSwitch from '../../components/CaregiverMain/MemberInfo/Toggle';

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


const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
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


const Button = styled.button`
  padding: 0.5rem 1rem;
  background-color: #eab308;
  color: white;
  border-radius: 0.375rem;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #fbbf24;
  }
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

const SubmitButton = styled.button`
  width: 100%;
  padding: 10px;
  background: #f4af1b;
  border: none;
  border-radius: 5px;
  margin-top: 20px;
  cursor: pointer;
`;

const Input = styled.input`
  width: 100px;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-left: 10px;
`;

const TimeButton = styled.button`
  background: #fff;
  border: 1px solid #ccc;
  padding: 5px 10px;
  border-radius: 5px;
  margin-right: 5px;
`;

const AddTimeButton = styled.button`
  background: #f4af1b;
  color: #000;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
`;

const Badge = styled.span`
  display: inline-block;
  padding: 5px 10px;
  background: #f4af1b;
  color: #000;
  border-radius: 5px;
`;

const Tag = styled.span`
  display: inline-block;
  background: #eee;
  padding: 5px 10px;
  border-radius: 5px;
  margin-right: 5px;
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

const Matching = () => {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
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
  const handleClick = () => {
    navigate('/ManageDetail');
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
            <NavItem href="/matchingDetail">
              <Users size={20} style={{ marginRight: '0.75rem' }} /> 매칭 요청
            </NavItem>
            <NavItem href="/matchingManage" active>
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
            <Button onClick={() => setIsEditing(!isEditing)}>
              {isEditing ? '수정사항 저장' : '회원 정보 수정'}
            </Button>

            <FormWrapper>
              <Section>
                <FormField>
                  <label>성함</label>
                  <input type="text" value={memberInfo.name} disabled={!isEditing} />
                </FormField>

                <FormField>
                  <label>생년월일</label>
                  <input type="text" value={memberInfo.phone} disabled={!isEditing} />
                </FormField>


                <FormField>
                  <label>성별</label>
                  <div>
                  <Badge>남성</Badge>
                  </div>
                </FormField>
              </Section>

              <Section>
                <div>
                  <span className="text-sm">근무 지역</span>
                  <Tag>잠원동/서초구/서울특별시</Tag>
                </div>
              </Section>
              <Section>
                <div>
                  <span className="text-sm">근무 시간</span>
                  <TimeButton>월 / 08:00...</TimeButton>
                    <TimeButton>수 / 12:00...</TimeButton>
                    <AddTimeButton>+ 시간추가</AddTimeButton>
                </div>
              </Section>
              <Section>
              <Input type="text" placeholder="시급 입력" /> 원 <Input type="text" placeholder="월급" />
              <SubmitButton>매칭 요청</SubmitButton>
              </Section>
            </FormWrapper>
          </GridWrapper>
        </MainContent>
      </ContentWrapper>
    </Container>
  );
};

export default Matching;
