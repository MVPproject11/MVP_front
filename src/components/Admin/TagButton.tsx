import styled from 'styled-components';

interface TagButtonProps {
  text: string;
  isSelected?: boolean;
  isAdd?: boolean;
  onClick?: () => void;
}

const Button = styled.button<{ isAdd?: boolean; isSelected?: boolean }>`
  padding: 8px 16px;
  border-radius: 9999px;
  font-size: 0.875rem;
  border: 1px solid ${({ isSelected, isAdd }) => (isSelected ? '#FBBF24' : isAdd ? '#FDE68A' : '#E5E7EB')};
  background-color: ${({ isSelected, isAdd }) => (isSelected ? '#FBBF24' : isAdd ? '#FDE68A' : 'transparent')};
`;

const TagButton: React.FC<TagButtonProps> = ({ text, isSelected, isAdd, onClick }) => {
  return (
    <Button onClick={onClick} isSelected={isSelected} isAdd={isAdd}>
      {isAdd ? `+ ${text}` : text}
    </Button>
  );
};

export default TagButton;
