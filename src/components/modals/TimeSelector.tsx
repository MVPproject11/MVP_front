import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  max-width: 40rem;
  margin: auto;
  background: white;
  border-radius: 1rem;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
`;

const Title = styled.h2`
  text-align: center;
  color: #facc15;
  font-size: 1.25rem;
  font-weight: 500;
  margin-bottom: 1.5rem;
`;

const DropdownContainer = styled.div`
  position: relative;
`;

const DropdownButton = styled.button`
  width: 100%;
  padding: 0.5rem;
  text-align: left;
  background: white;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;

const DropdownMenu = styled.div`
  position: absolute;
  z-index: 10;
  width: 100%;
  margin-top: 0.25rem;
  background: #1f2937;
  border: 1px solid #374151;
  border-radius: 0.5rem;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  max-height: 15rem;
  overflow-y: auto;
`;

const DropdownItem = styled.button`
  width: 100%;
  padding: 0.5rem;
  text-align: left;
  color: white;
  background: transparent;
  border: none;
  cursor: pointer;
  &:hover {
    background: #374151;
  }
`;

const Button = styled.button`
  width: 100%;
  background: #f3f4f6;
  color: #1f2937;
  padding: 0.75rem;
  border-radius: 0.5rem;
  cursor: pointer;
  &:hover {
    background: #e5e7eb;
  }
`;

interface DropdownProps {
  isOpen: boolean;
  options: string[];
  onSelect: (value: string) => void;
  onToggle: () => void;
  selected: string;
}

const Dropdown: React.FC<DropdownProps> = ({ isOpen, options, onSelect, onToggle, selected }) => (
  <DropdownContainer>
    <DropdownButton onClick={onToggle}>{selected || '선택'}</DropdownButton>
    {isOpen && (
      <DropdownMenu>
        {options.map((option) => (
          <DropdownItem key={option} onClick={() => { onSelect(option); onToggle(); }}>
            {option}
          </DropdownItem>
        ))}
      </DropdownMenu>
    )}
  </DropdownContainer>
);

const TimeSelector: React.FC = () => {
  const [isOpenType, setIsOpenType] = useState(false);
  const [isOpenStart, setIsOpenStart] = useState(false);
  const [isOpenEnd, setIsOpenEnd] = useState(false);
  
  const [selectedType, setSelectedType] = useState('');
  const [selectedStart, setSelectedStart] = useState('');
  const [selectedEnd, setSelectedEnd] = useState('');

  const typeOptions: string[] = ['본부동', '보도동', '수유동', '본동관', '관양동', '본초동', '발산동'];
  const timeOptions: string[] = Array.from({ length: 24 }, (_, i) => `${String(i).padStart(2, '0')}:00`);

  return (
    <Container>
      <Title>시간 추가</Title>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
        <div style={{ flex: 1 }}>
          <p style={{ fontSize: '0.875rem', color: '#4b5563', marginBottom: '0.5rem' }}>오영 선택</p>
          <Dropdown
            isOpen={isOpenType}
            options={typeOptions}
            onSelect={setSelectedType}
            onToggle={() => setIsOpenType(!isOpenType)}
            selected={selectedType}
          />
        </div>
        <span style={{ color: '#9ca3af', alignSelf: 'center' }}>/</span>
        <div style={{ flex: 1 }}>
          <p style={{ fontSize: '0.875rem', color: '#4b5563', marginBottom: '0.5rem' }}>시작시간</p>
          <Dropdown
            isOpen={isOpenStart}
            options={timeOptions}
            onSelect={setSelectedStart}
            onToggle={() => setIsOpenStart(!isOpenStart)}
            selected={selectedStart}
          />
        </div>
        <span style={{ color: '#9ca3af', alignSelf: 'center' }}>-</span>
        <div style={{ flex: 1 }}>
          <p style={{ fontSize: '0.875rem', color: '#4b5563', marginBottom: '0.5rem' }}>종료시간</p>
          <Dropdown
            isOpen={isOpenEnd}
            options={timeOptions}
            onSelect={setSelectedEnd}
            onToggle={() => setIsOpenEnd(!isOpenEnd)}
            selected={selectedEnd}
          />
        </div>
      </div>
      <Button>완료</Button>
    </Container>
  );
};

export default TimeSelector;
