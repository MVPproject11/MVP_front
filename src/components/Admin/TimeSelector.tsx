import styled from 'styled-components';

const TimeInput = styled.input`
  width: 4rem;
  padding: 0.25rem 0.5rem;
  border-radius: 0.375rem;
  border: 1px solid #D1D5DB;
`;

const TimeSelectorWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

const TimeSelector = () => {
  return (
    <TimeSelectorWrapper>
      <TimeInput type="text" placeholder="09" />
      <span>:</span>
      <TimeInput type="text" placeholder="45" />
    </TimeSelectorWrapper>
  );
};

export default TimeSelector;
