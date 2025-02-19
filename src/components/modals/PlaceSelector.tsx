import React, { useState } from 'react';
import styled from 'styled-components';
import { Location } from 'src/types/caregiver';

const Container = styled.div`
  width: 100%;
  max-width: 32rem;
  margin: 0 auto;
  background-color: white;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
`;

const Title = styled.h2`
  font-size: 1.25rem;
  font-weight: 500;
  color: #eab308;
  margin-bottom: 1.5rem;
  text-align: center;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const Label = styled.p`
  font-size: 0.875rem;
  color: #4b5563;
  margin-bottom: 0.5rem;
`;

const DropdownContainer = styled.div`
  flex: 1;
`;

const Separator = styled.div`
  color: #d1d5db;
  font-size: 1.5rem;
  font-weight: 400;
  padding-bottom: 0.25rem;
`;

const DropdownButton = styled.button`
  width: 100%;
  padding: 0.75rem;
  text-align: left;
  background-color: white;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  color: #1f2937;
  font-size: 1rem;
  &:focus {
    outline: none;
    border-color: #eab308;
  }
`;

const OptionsContainer = styled.div`
  position: absolute;
  z-index: 10;
  width: 100%;
  margin-top: 0.25rem;
  background-color: #4b5563;
  border: 1px solid #374151;
  border-radius: 0.375rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-height: 15rem;
  overflow-y: auto;
`;

const OptionButton = styled.button`
  width: 100%;
  padding: 0.75rem;
  text-align: left;
  color: white;
  font-size: 1rem;
  background-color: transparent;
  border-bottom: 1px solid #374151;
  cursor: pointer;
  &:hover {
    background-color: #6b7280;
  }
  &:last-child {
    border-bottom: none;
  }
`;

const SelectedContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1.5rem;
`;

const SelectedItem = styled.div`
  padding: 0.5rem 1.5rem;
  border-radius: 9999px;
  border: 1px solid #fbbf24;
  font-size: 0.875rem;
  color: #1f2937;
`;

const Button = styled.button`
  width: 100%;
  padding: 1rem;
  background-color: #f3f4f6;
  color: #374151;
  font-size: 1rem;
  border-radius: 0.375rem;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #e5e7eb;
  }
`;

interface PlaceSelectorProps {
    onClose: () => void;
    onSelect: (selectedRegion: Location) => void;
  }

const PlaceSelector: React.FC<PlaceSelectorProps> = ({onClose, onSelect}) => {
  const [isOpenType, setIsOpenType] = useState<boolean>(false);
  const [isOpenStart, setIsOpenStart] = useState<boolean>(false);
  const [isOpenEnd, setIsOpenEnd] = useState<boolean>(false);
  
  const [selectedType, setSelectedType] = useState<string>('');
  const [selectedStart, setSelectedStart] = useState<string>('');
  const [selectedEnd, setSelectedEnd] = useState<string>('');

  // 서울시 구 목록
  const typeOptions: string[] = [
    '강남구', '강동구', '강북구', '강서구', '관악구', 
    '광진구', '구로구', '금천구', '노원구', '도봉구', 
    '동대문구', '동작구', '마포구', '서대문구', '서초구',
    '성동구', '성북구', '송파구', '양천구', '영등포구',
    '용산구', '은평구', '종로구', '중구', '중랑구'
  ];
  
  const startTimeOptions: string[] = Array.from({ length: 24 }, (_, i) => 
    `${String(i).padStart(2, '0')}:00`
  );
  
  const endTimeOptions: string[] = Array.from({ length: 24 }, (_, i) => 
    `${String(i).padStart(2, '0')}:00`
  );

  interface DropdownProps {
    isOpen: boolean;
    options: string[];
    onSelect: (option: string) => void;
    onToggle: () => void;
    selected: string;
  }

  const Dropdown: React.FC<DropdownProps> = ({ isOpen, options, onSelect, onToggle, selected }) => (
    <div className="relative">
      <DropdownButton onClick={onToggle}>
        {selected || '선택'}
      </DropdownButton>
      
      {isOpen && (
        <OptionsContainer>
          {options.map((option) => (
            <OptionButton
              key={option}
              onClick={() => {
                onSelect(option);
                onToggle();
              }}
            >
              {option}
            </OptionButton>
          ))}
        </OptionsContainer>
      )}
    </div>
  );

  return (
    <Container>
      <Title>시간 추가</Title>
      
      <Row>
        <DropdownContainer>
          <Label>지역 선택</Label>
          <Dropdown
            isOpen={isOpenType}
            options={typeOptions}
            onSelect={setSelectedType}
            onToggle={() => setIsOpenType(!isOpenType)}
            selected={selectedType}
          />
        </DropdownContainer>
        
        <Separator>/</Separator>
        
        <DropdownContainer>
          <Label>시작시간</Label>
          <Dropdown
            isOpen={isOpenStart}
            options={startTimeOptions}
            onSelect={setSelectedStart}
            onToggle={() => setIsOpenStart(!isOpenStart)}
            selected={selectedStart}
          />
        </DropdownContainer>
        
        <Separator>-</Separator>
        
        <DropdownContainer>
          <Label>종료시간</Label>
          <Dropdown
            isOpen={isOpenEnd}
            options={endTimeOptions}
            onSelect={setSelectedEnd}
            onToggle={() => setIsOpenEnd(!isOpenEnd)}
            selected={selectedEnd}
          />
        </DropdownContainer>
      </Row>

      {selectedType && selectedStart && selectedEnd && (
        <SelectedContainer>
          <SelectedItem>{`${selectedType}/${selectedStart}-${selectedEnd}`}</SelectedItem>
        </SelectedContainer>
      )}

      <Button>완료</Button>
    </Container>
  );
};

export default PlaceSelector;
