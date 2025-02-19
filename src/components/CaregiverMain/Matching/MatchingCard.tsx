import React from 'react';
import styled from 'styled-components';

interface MatchingCardProps {
  image?: string;
  name: string;
  status: 'active' | 'inactive';
}

const dummyData: MatchingCardProps[] = [
  {
    image: '/api/placeholder/200/200',
    name: '홍길동 어르신',
    status: 'active'
  },
  {
    image: '/api/placeholder/200/200',
    name: '홍길동 어르신',
    status: 'active'
  },
  {
    image: '/api/placeholder/200/200',
    name: '홍길동 어르신',
    status: 'active'
  },
  {
    image: '/api/placeholder/200/200',
    name: '김영희 어르신',
    status: 'inactive'
  },
  {
    image: '/api/placeholder/200/200',
    name: '김영희 어르신',
    status: 'inactive'
  },
  {
    image: '/api/placeholder/200/200',
    name: '김영희 어르신',
    status: 'inactive'
  }
];

const Card = styled.div<{ status: 'active' | 'inactive' }>`
  position: relative;
  border-radius: 0.75rem;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: ${(props) => (props.status === 'active' ? '2px solid #fbbf24' : '1px solid #e5e7eb')};
`;

const ImageWrapper = styled.div`
  aspect-ratio: 1;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Placeholder = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f3f4f6;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PlaceholderIcon = styled.svg`
  width: 3rem;
  height: 3rem;
  color: #e5e7eb;
`;

const NameWrapper = styled.div<{ status: 'active' | 'inactive' }>`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 0.5rem;
  background-color: ${(props) => (props.status === 'active' ? '#fbbf24' : '#e5e7eb')};
`;

const Name = styled.p`
  font-size: 0.875rem;
  font-weight: 500;
  color: white;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  width: 1.25rem;
  height: 1.25rem;
  background-color: white;
  border-radius: 50%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Icon = styled.svg`
  width: 0.75rem;
  height: 0.75rem;
  fill: currentColor;
`;

const MatchingCard: React.FC<MatchingCardProps> = ({ image, name, status }) => {
  return (
    <Card status={status}>
      <ImageWrapper>
        {image ? (
          <Image src={image} alt={name} />
        ) : (
          <Placeholder>
            <PlaceholderIcon viewBox="0 0 24 24">
              <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08s5.97 1.09 6 3.08c-1.29 1.94-3.5 3.22-6 3.22z" />
            </PlaceholderIcon>
          </Placeholder>
        )}
      </ImageWrapper>
      <NameWrapper status={status}>
        <Name>{name}</Name>
      </NameWrapper>
      <IconWrapper>
        <Icon viewBox="0 0 24 24">
          <path fill="currentColor" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </Icon>
      </IconWrapper>
    </Card>
  );
};

export default MatchingCard;
