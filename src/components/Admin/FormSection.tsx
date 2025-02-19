import styled from "styled-components";

interface SectionProps {
  title: string;
  required?: boolean;
  description?: string;
  children: React.ReactNode;
}

const SectionWrapper = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  font-weight: bold;
  font-size: 1rem;
  color: #374151;
`;

const Description = styled.p`
  font-size: 0.875rem;
  color: #6B7280;
  margin-top: 0.5rem;
`;

const Input = styled.input`
  padding: 0.25rem 0.5rem;
  border-radius: 0.375rem;
  border: 1px solid #D1D5DB;
  font-size: 1rem;
  width: 100%;
`;

const InputGroup = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

const RequiredMark = styled.span`
  color: #F87171;
  margin-right: 0.25rem;
`;

const FormSection: React.FC<SectionProps> = ({ title, required = false, children, description }) => {
  return (
    <SectionWrapper>
      <div className="mb-2">
        <Label>
          {required && <RequiredMark>*</RequiredMark>}
          {title}
        </Label>
        {description && <Description>{description}</Description>}
      </div>
      {children}
    </SectionWrapper>
  );
};

export { FormSection, InputGroup, Input };
