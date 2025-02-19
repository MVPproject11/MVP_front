import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Home, Users, Settings } from 'lucide-react';
import TagButton from 'src/components/Admin/TagButton';
import {FormSection, Input, InputGroup} from 'src/components/Admin/FormSection';
import { Elder } from 'src/types/elder';
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useElder } from 'src/hook/useElder';
import { getElder, updateElder } from "../api/elderApi";
import axios from "axios";

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

const AddDetail = ({ elderId }: { elderId: string }) => {
    const { data :elderData, isLoading, error } = useElder(elderId);
    const [name, setName] = useState<string>('');
  const [birth, setBirth] = useState<string>('');
  const [gender, setGender] = useState<'M' | 'F'>('M');
  const [weight, setWeight] = useState<number | string>('');
  const [address, setAddress] = useState<string>('');
  const [disease, setDisease] = useState<string>('');
  const [housemate, setHousemate] = useState<string>('');
  const [careStartTime, setCareStartTime] = useState<string>('');
  const [careEndTime, setCareEndTime] = useState<string>('');
  const [careDays, setCareDays] = useState<string[]>([]);
  const [mealAssists, setMealAssists] = useState<string[]>([]);
  const [excretionAssists, setExcretionAssists] = useState<string[]>([]);
  const [moveAssists, setMoveAssists] = useState<string[]>([]);
  const [dailyLivingAssists, setDailyLivingAssists] = useState<string[]>([]);
  const [image, setImage] = useState<string>('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  useEffect(() => {
    if (elderData) {
        setName(elderData.name);
        setBirth(elderData.birth);
        setGender(elderData.gender);
        setWeight(elderData.weight);
        setAddress(elderData.address);
        setDisease(elderData.disease);
        setHousemate(elderData.housemate);
        setCareStartTime(elderData.careStartTime);
        setCareEndTime(elderData.careEndTime);
        setCareDays(elderData.careDays);
        setMealAssists(elderData.mealAssists);
        setExcretionAssists(elderData.excretionAssists);
        setMoveAssists(elderData.moveAssists);
        setDailyLivingAssists(elderData.dailyLivingAssists);
        setImage(elderData.image);
    }
  }, [elderData]);

  const handleSave = async () => {
    const UpdateData: Elder = {
        ...elderData,
        name,
        birth,
        gender,
        weight,
        address,
        disease,
        housemate,
        careStartTime,
        careEndTime,
        careDays,
        mealAssists,
        excretionAssists,
        moveAssists,
        dailyLivingAssists,
        image
    };
    await updateElderData(UpdateData);
  }

  const handleTagClick = async (tag: string) => {
    if (!selectedTags.includes(tag)) {
      // 태그가 선택되지 않았을 경우
      setSelectedTags((prevTags) => [...prevTags, tag]);
      await saveTagToDB(tag); // DB에 저장하는 함수 호출
    }
  };

  const saveTagToDB = async (tag: string) => {
    try {
      const response = await axios.post('/api/tags', { tag });
      console.log('태그가 DB에 저장되었습니다:', response.data);
    } catch (error) {
      console.error('태그 저장에 실패했습니다:', error);
    }
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
            <Title>근무 조건 설정</Title>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
                <Button>임시저장</Button>
                <Button primary onClick={handleSave}>저장</Button>
            </div>

                <FormSection title="사진" required>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                        {image ? (
                            <img src={image} alt="Preview" className="max-w-xs mx-auto" />
                        ) : (
                        <div className="flex flex-col items-center">
                            <span className="text-yellow-400 text-4xl mb-2">+</span>
                            <span className="text-gray-500">사진 추가</span>
                        </div>
                        )}
                    </div>
                </FormSection>

            <FormWrapper>
              <Section>
                <FormField>
                <Input type="text" placeholder="1945" />
                    <span>년</span>
                <Input type="text" placeholder="08" />
                    <span>월</span>
                <Input type="text" placeholder="15" />
                    <span>일</span>
                </FormField>

                <FormField>
                    <div className="flex gap-2">
                        <TagButton text="남성" onClick={() => handleTagClick('남성')} isSelected={selectedTags.includes('남성')} />
                        <TagButton text="여성" onClick={() => handleTagClick('여성')} isSelected={selectedTags.includes('여성')} />
                    </div>
                </FormField>


                <FormField>
                    <InputGroup>
                        <Input type="text" placeholder="몸무게 입력" />
                        <span>kg</span>
                    </InputGroup>
                </FormField>

                <FormField>
                <div className="flex flex-wrap gap-2">
                    <TagButton text="태권도" onClick={() => handleTagClick('태권도')} isSelected={selectedTags.includes('태권도')} />
                    <TagButton text="유도" onClick={() => handleTagClick('유도')} isSelected={selectedTags.includes('유도')}/>
                    <TagButton text="주짓수" onClick={() => handleTagClick('주짓수')} isSelected={selectedTags.includes('주짓수')}/>
                    <TagButton text="체조" onClick={() => handleTagClick('체조')} isSelected={selectedTags.includes('체조')}/>
                    <TagButton text="수영" onClick={() => handleTagClick('수영')} isSelected={selectedTags.includes('수영')}/>
                    <TagButton text="종목 추가" isAdd />
                </div>
                </FormField>
                <FormField>
                <Input
                    type="text"
                    className="w-full px-3 py-2 border rounded"
                    placeholder="서울시 서초구 강남동"
                    readOnly
                />
                </FormField>  
                <FormField>
                <div className="flex flex-wrap gap-2">
                    <TagButton text="월/08:00..." onClick={() => handleTagClick('월/08:00...')} isSelected={selectedTags.includes('월/08:00...')}/>
                    <TagButton text="수/12:00..." onClick={() => handleTagClick('수/12:00...')} isSelected={selectedTags.includes('수/12:00...')}/>
                    <TagButton text="시간 추가" isAdd />
                </div> 
                </FormField>
                <FormField>
                <div className="flex flex-wrap gap-2">
                    <TagButton text="태권도강사"  onClick={() => handleTagClick('태권도강사')} isSelected={selectedTags.includes('태권도강사')}/>
                    <TagButton text="놀이체육" onClick={() => handleTagClick('놀이체육')} isSelected={selectedTags.includes('놀이체육')}/>
                    <TagButton text="방문체육" onClick={() => handleTagClick('방문체육')} isSelected={selectedTags.includes('방문체육')}/>
                    <TagButton text="공원체육" onClick={() => handleTagClick('공원체육')} isSelected={selectedTags.includes('공원체육')}/>
                    <TagButton text="학원" onClick={() => handleTagClick('학원')} isSelected={selectedTags.includes('학원')}/>
                    <TagButton text="유치원/어린이집" onClick={() => handleTagClick('유치원/어린이집')} isSelected={selectedTags.includes('유치원/어린이집')}/>
                </div>
                </FormField>
                <FormField>
                  <div className="flex flex-wrap gap-2">
                    <TagButton text="정교사" onClick={() => handleTagClick('정교사')} isSelected={selectedTags.includes('정교사')} />
                    <TagButton text="보조교사" onClick={() => handleTagClick('보조교사')} isSelected={selectedTags.includes('보조교사')} />
                    <TagButton text="방과후교사" onClick={() => handleTagClick('방과후교사')} isSelected={selectedTags.includes('방과후교사')} />
                    <TagButton text="보조강사" onClick={() => handleTagClick('보조강사')} isSelected={selectedTags.includes('보조강사')} />
                    <TagButton text="운동코치" onClick={() => handleTagClick('운동코치')} isSelected={selectedTags.includes('운동코치')} />
                    <TagButton text="교육프리랜서" onClick={() => handleTagClick('교육프리랜서')} isSelected={selectedTags.includes('교육프리랜서')} />
                    <TagButton text="유치원/어린이집" onClick={() => handleTagClick('유치원/어린이집')} isSelected={selectedTags.includes('유치원/어린이집')} />
                    <TagButton text="장기근무 가능자" onClick={() => handleTagClick('장기근무 가능자')} isSelected={selectedTags.includes('장기근무 가능자')} />
                    <TagButton text="방학기간근무가능" onClick={() => handleTagClick('방학기간근무가능')} isSelected={selectedTags.includes('방학기간근무가능')} />
                  </div>
                </FormField>

                <FormField>
                  <Input type="text" placeholder="자격, 경력명" />
                </FormField>

                <FormField>
                  <div className="flex flex-wrap gap-2">
                    <TagButton text="현장 방문은..." onClick={() => handleTagClick('현장 방문은...')} isSelected={selectedTags.includes('현장 방문은...')} />
                    <TagButton text="어린이와 잘..." onClick={() => handleTagClick('어린이와 잘...')} isSelected={selectedTags.includes('어린이와 잘...')} />
                    <TagButton text="종목 추가" isAdd onClick={() => handleTagClick('종목 추가')} />
                  </div>
                </FormField>
              </Section>

              <Section>
                <FormField>
                  <div className="flex flex-wrap gap-2">
                    <TagButton text="스승님으로..." onClick={() => handleTagClick('스승님으로...')} isSelected={selectedTags.includes('스승님으로...')} />
                    <TagButton text="++ 종목추가" isAdd onClick={() => handleTagClick('++ 종목추가')} />
                  </div>
                </FormField>

                <FormField>
                  <div className="flex flex-wrap gap-2">
                    <TagButton text="스스로 일어..." onClick={() => handleTagClick('스스로 일어...')} isSelected={selectedTags.includes('스스로 일어...')} />
                    <TagButton text="++ 종목추가" isAdd onClick={() => handleTagClick('++ 종목추가')} />
                  </div>
                </FormField>

                <FormField>
                  <div className="flex flex-wrap gap-2">
                    <TagButton text="가만히 앉아..." onClick={() => handleTagClick('가만히 앉아...')} isSelected={selectedTags.includes('가만히 앉아...')} />
                    <TagButton text="++ 종목추가" isAdd onClick={() => handleTagClick('++ 종목추가')} />
                  </div>
                </FormField>

                <FormField>
                  <div className="flex flex-wrap gap-2">
                    <TagButton text="거동 불가" onClick={() => handleTagClick('거동 불가')} isSelected={selectedTags.includes('거동 불가')} />
                    <TagButton text="++ 종목추가" isAdd onClick={() => handleTagClick('++ 종목추가')} />
                  </div>
                </FormField>

                <FormField>
                  <div className="flex flex-wrap gap-2">
                    <TagButton text="얼굴 멍들..." onClick={() => handleTagClick('얼굴 멍들...')} isSelected={selectedTags.includes('얼굴 멍들...')} />
                    <TagButton text="얼굴 부종..." onClick={() => handleTagClick('얼굴 부종...')} isSelected={selectedTags.includes('얼굴 부종...')} />
                    <TagButton text="++ 종목추가" isAdd onClick={() => handleTagClick('++ 종목추가')} />
                  </div>
                </FormField>
              </Section>
            </FormWrapper>
          </GridWrapper>
        </MainContent>
      </ContentWrapper>
    </Container>
  );
};

export default AddDetail;