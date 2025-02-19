import React, { useState } from 'react';
import MatchingCard from 'src/components/CaregiverMain/Matching/MatchingCard';
import { useCaregivers } from 'src/hook/useCaregivers';
import { Caregiver } from 'src/types/caregiver';
import styled from 'styled-components';

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

interface Props {
  elderId: number;
}

const CaregiversForElder: React.FC<Props> = ({ elderId }) => {
  const { data: caregivers, isLoading: caregiversLoading, isError: caregiversError, error: caregiversErrorData } = useCaregivers(elderId);
  const [selectedCaregiverId, setSelectedCaregiverId] = useState<number | null>(null);

  const handleClick = (caregiverId: number) => {
    setSelectedCaregiverId(caregiverId);
  };

  if (caregiversLoading) return <div>Loading caregivers...</div>;
  if (caregiversError) return <div>Error loading caregivers: {caregiversErrorData.message}</div>;

  return (
    <Grid>
      {Array.isArray(caregivers) && caregivers.length > 0
        ? caregivers.map((caregiver: Caregiver) => (
            <MatchingCard
              key={caregiver.id}
              image={caregiver.caregiverProfile}
              name={caregiver.name}
              initialStatus={selectedCaregiverId === caregiver.id ? 'active' : 'inactive'}
              onClick={() => handleClick(caregiver.id)}
            />
          ))
        : null}
    </Grid>
  );
};

export default CaregiversForElder;
