import React, { useState } from 'react';
import YellowToggleSwitch from '../../components/CaregiverMain/MemberInfo/Toggle';
import styled from 'styled-components';
import { Home, Users, Settings } from 'lucide-react';

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

const MemberInfoForm = () => {
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
            <NavItem href="/matching">
              <Settings size={20} style={{ marginRight: '0.75rem' }} /> 매칭 관리
            </NavItem>
            <NavItem href="/settings" active>
              <Settings size={20} style={{ marginRight: '0.75rem' }} /> 회원 정보 관리
            </NavItem>
          </Nav>
        </Sidebar>

        <MainContent>
          <GridWrapper>
            <Title>회원 정보 관리</Title>
            <Button onClick={() => setIsEditing(!isEditing)}>
              {isEditing ? '수정사항 저장' : '회원 정보 수정'}
            </Button>

            <FormWrapper>
              <Section>
                <FormField>
                  <label>이름</label>
                  <input type="text" value={memberInfo.name} disabled={!isEditing} />
                </FormField>

                <FormField>
                  <label>연락처</label>
                  <input type="text" value={memberInfo.phone} disabled={!isEditing} />
                </FormField>

                <div>
                  <label>성별</label>
                  <div>
                    <GenderButton
                      active={memberInfo.gender === 'male'}
                      disabled={!isEditing}
                      onClick={() => isEditing && setMemberInfo({ ...memberInfo, gender: 'male' })}
                    >
                      남성
                    </GenderButton>
                    <GenderButton
                      active={memberInfo.gender === 'female'}
                      disabled={!isEditing}
                      onClick={() => isEditing && setMemberInfo({ ...memberInfo, gender: 'female' })}
                    >
                      여성
                    </GenderButton>
                  </div>
                </div>

                <FormField>
                  <label>주소</label>
                  <div>
                    <input
                      type="text"
                      value={memberInfo.address}
                      disabled={!isEditing}
                    />
                    {isEditing && (
                      <AddressButton>주소찾기</AddressButton>
                    )}
                  </div>
                </FormField>
              </Section>

              <Section>
                <CertificationField>
                  <label>요양보호사 자격증</label>
                  <div className="inputs">
                    <input
                      type="text"
                      value={memberInfo.certifications.caregiving.year}
                      disabled={!isEditing}
                      placeholder="제"
                    />
                    <input
                      type="text"
                      value={memberInfo.certifications.caregiving.number}
                      disabled={!isEditing}
                      placeholder="호"
                    />
                  </div>
                </CertificationField>

                <CertificationField>
                  <label>사회복지사 자격증</label>
                  <div className="inputs">
                    <input
                      type="text"
                      value={memberInfo.certifications.social.year}
                      disabled={!isEditing}
                      placeholder="제"
                    />
                    <input
                      type="text"
                      value={memberInfo.certifications.social.number}
                      disabled={!isEditing}
                      placeholder="호"
                    />
                  </div>
                </CertificationField>

                <CertificationField>
                  <label>간호조무사 자격증 / 시도청 발급</label>
                  <div className="inputs">
                    <input
                      type="text"
                      value={memberInfo.certifications.nursing.year}
                      disabled={!isEditing}
                      placeholder="제"
                    />
                    <input
                      type="text"
                      value={memberInfo.certifications.nursing.number}
                      disabled={!isEditing}
                      placeholder="호"
                    />
                  </div>
                </CertificationField>

                <CertificationField>
                  <label>간호조무사 자격증 / 보건복지부 발급</label>
                  <div className="inputs">
                    <input
                      type="text"
                      value={memberInfo.certifications.nursingHome.number}
                      disabled={!isEditing}
                      placeholder="호"
                    />
                  </div>
                </CertificationField>
              </Section>

              <Section>
                <div>
                  <span className="text-sm">*차량 소유 여부</span>
                  <YellowToggleSwitch
                    checked={memberInfo.preferences.carePossible}
                    onCheckedChange={(checked) => setMemberInfo({
                      ...memberInfo,
                      preferences: { ...memberInfo.preferences, carePossible: checked }
                    })}
                    disabled={!isEditing}
                  />
                </div>

                <div>
                  <span className="text-sm">*치매교육 이수 여부</span>
                  <YellowToggleSwitch
                    checked={memberInfo.preferences.sellPossible}
                    onCheckedChange={(checked) => setMemberInfo({
                      ...memberInfo,
                      preferences: { ...memberInfo.preferences, sellPossible: checked }
                    })}
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

export default MemberInfoForm;
