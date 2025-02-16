import React from 'react';
import styled from 'styled-components';
import Default from "../../../assets/image/default.png";

const ProfileContainer = styled.div`
  background-color: white;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  padding: 1rem;
  text-align: center;
  width: 200px;
`;

const ProfileImage = styled.div<{ imageUrl: string | null }>`
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
  margin-bottom: 1rem;
  background-color: #d1d5db; 
  background-image: url(${(props) => props.imageUrl || Default});
  background-size: cover;
  background-position: center;
  border: 2px solid ${(props) => (props.imageUrl ? '#facc15' : '#d1d5db')}; /* 테두리 색상 설정 */
`;

const NameText = styled.div`
  font-weight: 600;
  font-size: 1rem;
  color: #111827;
`;

interface ProfileComponentProps {
  name: string;
  imageUrl: string | null;
}

const ProfileComponent: React.FC<ProfileComponentProps> = ({ name = '000 어르신', imageUrl = Default }) => {
  return (
    <ProfileContainer>
      <ProfileImage imageUrl={imageUrl} />
      <NameText>{name}</NameText>
    </ProfileContainer>
  );
};

export default ProfileComponent;
