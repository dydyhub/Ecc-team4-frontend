import styled from '@emotion/styled';

export const PageWrapper = styled.div`
  position: relative;
  min-height: 100vh;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
`;

export const ClickWrapper = styled.div`
  border: 2px solid #cdd9f4;
  border-radius: 12px;
  cursor: pointer;

  &:hover {
    box-shadow: 0 6px 16px rgba(37, 99, 235, 0.2);
  }
`;

export const CardInner = styled.div`
  position: relative;
  height: 180px;
`;

export const Country = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 24px;
  font-weight: 700;
`;

export const Period = styled.div`
  position: absolute;
  right: 12px;
  bottom: 12px;
  font-size: 12px;
  color: #6b7280;
`;

export const FloatingAddButton = styled.button`
  position: fixed;
  right: 24px;
  bottom: 24px;

  width: 56px;
  height: 56px;
  border-radius: 50%;

  background-color: #2563eb;
  color: white;
  font-size: 32px;
  line-height: 0;

  border: none;
  cursor: pointer;

  box-shadow: none;

  &:hover {
    background-color: #1d4ed8;
  }

  &:active {
    transform: scale(0.95);
  }
`;

/* 셀렉트 영역 */
export const FilterBar = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 12px;
`;
