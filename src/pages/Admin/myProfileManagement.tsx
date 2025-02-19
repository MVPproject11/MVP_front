import React, { useState, useEffect } from 'react';
import YellowToggleSwitch from '../../components/CaregiverMain/MemberInfo/Toggle';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { Home, Users, Settings } from 'lucide-react';
import { useElder, useUpdateElder, useDeleteElder } from 'src/hook/useElder';

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

const MyProfile = () => {
    const location = useLocation();
  const elderId = location.state?.elderId;
  const [isEditing, setIsEditing] = useState(false);
  const { data: memberInfo, isError, error, isLoading } = useElder(elderId);
  const updateElderMutation = useUpdateElder();
  const deleteElderMutation = useDeleteElder();
  
  const [localMemberInfo, setLocalMemberInfo] = useState<any>({});

  useEffect(() => {
    if (memberInfo) {
      setLocalMemberInfo(memberInfo);
    }
  }, [memberInfo]);

  const handleSave = () => {
    updateElderMutation.mutate({ elderId, data: localMemberInfo });
    setIsEditing(false);
  };

  const handleDelete = () => {
    deleteElderMutation.mutate(elderId);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading member info: {error.message}</div>;
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
              <Home size={20} style={{ marginRight: '0.75rem' }} /> 내 프로필
            </NavItem>
            <NavItem href="/work-settings">
              <Users size={20} style={{ marginRight: '0.75rem' }} /> 근무 조건 설정
            </NavItem>
            <NavItem href="/matching">
              <Settings size={20} style={{ marginRight: '0.75rem' }} /> 매칭 관리
            </NavItem>
            <NavItem href="/myprofile" active>
              <Settings size={20} style={{ marginRight: '0.75rem' }} /> 회원 정보 관리
            </NavItem>
          </Nav>
        </Sidebar>

        <MainContent>
          <GridWrapper>
            <Title>내 정보 관리</Title>
            <Button onClick={() => (isEditing ? handleSave() : setIsEditing(true))}>
              {isEditing ? '수정사항 저장' : '회원 정보 수정'}
            </Button>
            <Button onClick={handleDelete} style={{ backgroundColor: 'red', marginLeft: '1rem' }}>
              회원 정보 삭제
            </Button>

            <FormWrapper>
              <Section>
                <FormField>
                  <label>센터 이름</label>
                  <input type="text" value={localMemberInfo.name} onChange={(e) => setLocalMemberInfo({ ...localMemberInfo, name: e.target.value })} disabled={!isEditing} />
                </FormField>

                <FormField>
                  <label>연락처</label>
                  <input type="text" value={localMemberInfo.phone} onChange={(e) => setLocalMemberInfo({ ...localMemberInfo, phone: e.target.value })} disabled={!isEditing} />
                </FormField>

                <FormField>
                  <label>주소</label>
                  <div>
                    <input type="text" value={localMemberInfo.address} onChange={(e) => setLocalMemberInfo({ ...localMemberInfo, address: e.target.value })} disabled={!isEditing} />
                    {isEditing && <AddressButton>주소찾기</AddressButton>}
                  </div>
                </FormField>
              </Section>

              <Section>
                <div>
                  <span className="text-sm">목욕차량 소유 여부</span>
                  <YellowToggleSwitch
                    checked={localMemberInfo.preferences?.carePossible ?? false}
                    onCheckedChange={(checked) => setLocalMemberInfo({ ...localMemberInfo, preferences: { ...localMemberInfo.preferences, carePossible: checked } })}
                    disabled={!isEditing}
                  />
                </div>
              </Section>
            </FormWrapper>
          </GridWrapper>
        </MainContent>
      </ContentWrapper>
    </Container>
  );
};

export default MyProfile;
