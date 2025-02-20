import React, { useState } from 'react';
import styled from 'styled-components';
import { X } from 'lucide-react';

interface TimePickerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (selectedTime: string) => void;
}

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContainer = styled.div`
  background: white;
  border-radius: 12px;
  width: 100%;
  max-width: 400px;
  overflow: hidden;
`;

const Header = styled.div`
  padding: 16px;
  border-bottom: 1px solid #e5e7eb;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 1.25rem;
  font-weight: 500;
  color: #d97706;
`;

const CloseButton = styled.button`
  color: #6b7280;
  &:hover {
    color: #374151;
  }
`;

const Content = styled.div`
  padding: 24px;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 24px;
`;

const Label = styled.label`
  display: block;
  font-size: 0.875rem;
  color: #6b7280;
  margin-bottom: 4px;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px 12px;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  &:focus {
    outline: none;
    border-color: #d97706;
    box-shadow: 0 0 0 2px rgba(217, 119, 6, 0.2);
  }
`;

const Divider = styled.div`
  color: #9ca3af;
  padding-top: 24px;
`;

const SubmitButton = styled.button`
  width: 100%;
  background: #f3f4f6;
  color: #1f2937;
  padding: 12px;
  border-radius: 8px;
  transition: background 0.2s;
  &:hover {
    background: #e5e7eb;
  }
`;

const TimePickerModal: React.FC<TimePickerModalProps> = ({ isOpen, onClose }) => {
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');

  if (!isOpen) return null;

  return (
    <Overlay>
      <ModalContainer>
        <Header>
          <Title>시간 추가</Title>
          <CloseButton onClick={onClose}>
            <X size={20} />
          </CloseButton>
        </Header>

        <Content>
          <InputContainer>
            <div>
              <Label>오영 선택</Label>
              <Input
                type="time"
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
              />
            </div>
            <Divider>/</Divider>
            <div>
              <Label>시작시간</Label>
              <Input
                type="time"
                value={endTime}
                onChange={(e) => setEndTime(e.target.value)}
              />
            </div>
            <Divider>-</Divider>
            <div>
              <Label>종료시간</Label>
              <Input type="time" disabled />
            </div>
          </InputContainer>

          <SubmitButton>완료</SubmitButton>
        </Content>
      </ModalContainer>
    </Overlay>
  );
};

export default TimePickerModal;
