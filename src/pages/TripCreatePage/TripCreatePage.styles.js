import styled from '@emotion/styled';

export const PageWrapper = styled.div`
  max-width: 420px;
  margin: 0 auto;
  padding: 24px;
`;

export const FormContainer = styled.div`
  min-height: 100vh;
  display: block;
  padding-top: 80px;
`;

export const Form = styled.div`
  width: 100%;
  max-width: clamp(720px, 72vw, 1000px);

  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-left: -300px;
`;

export const Row = styled.div`
  display: flex;
  align-items: ${({ alignTop }) => (alignTop ? 'flex-start' : 'center')};
  gap: 16px;
`;

export const Label = styled.label`
  width: 72px;
  font-size: 16px;
  font-weight: 600;
  color: #111827;
  flex-shrink: 0;
`;

export const TabContainer = styled.div`
  flex: 1;

  button {
    height: 48px;
    font-size: 15px;
    border-radius: 10px;
  }
`;

export const DatePickerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 8px;

  input {
    width: 150px;
    height: 44px;
    padding: 0 12px;
    border: 1px solid #d1d5db;
    border-radius: 8px;
    font-size: 15px;
    cursor: pointer;
  }

  .react-datepicker {
    position: absolute;
    top: 48px;
    left: 0;
    z-index: 100;
  }

  .input-row {
    display: flex;
    gap: 16px;
  }
`;

export const FloatingButtonWrapper = styled.div`
  position: fixed;
  right: 24px;
  bottom: 24px;
  z-index: 1000;
`;
