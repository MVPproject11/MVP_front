import React, { useState } from 'react';
import styled from 'styled-components';

interface YellowToggleSwitchProps {
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
  disabled?: boolean;
}

const ToggleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0.5rem;
`;

const Label = styled.span`
  font-size: 0.875rem;
  color: #4b5563;
  font-weight: 500;
  margin: 0 0.5rem;
`;

const ToggleButton = styled.div<{ isToggled: boolean; disabled: boolean }>`
  width: 3.25rem;
  height: 1.75rem;
  display: flex;
  align-items: center;
  justify-content: ${props => (props.isToggled ? 'flex-end' : 'flex-start')};
  border-radius: 9999px;
  padding: 0.25rem;
  background-color: ${props => (props.isToggled ? '#fbbf24' : '#d1d5db')};
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  transition: background-color 0.3s ease, transform 0.2s ease;
  box-shadow: ${props => (props.isToggled ? '0 2px 10px rgba(251, 191, 36, 0.4)' : 'none')};

  &:hover {
    background-color: ${props => !props.disabled && (props.isToggled ? '#f59e0b' : '#e5e7eb')};
  }
`;

const ToggleCircle = styled.div<{ isToggled: boolean }>`
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 9999px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transform: ${props => (props.isToggled ? 'translateX(1.5rem)' : 'translateX(0)')};
  transition: transform 0.2s ease;
`;

const YellowToggleSwitch: React.FC<YellowToggleSwitchProps> = ({ checked, onCheckedChange, disabled = false }) => {
  const [isToggled, setIsToggled] = useState(checked);

  const handleToggle = () => {
    if (!disabled) {
      const newState = !isToggled;
      setIsToggled(newState);
      onCheckedChange(newState);
    }
  };

  return (
    <ToggleWrapper>
      <Label>Off</Label>
      <ToggleButton isToggled={isToggled} onClick={handleToggle} disabled={disabled}>
        <ToggleCircle isToggled={isToggled} />
      </ToggleButton>
      <Label>On</Label>
    </ToggleWrapper>
  );
};

export default YellowToggleSwitch;
