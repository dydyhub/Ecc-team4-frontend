import styled from '@emotion/styled';
import { useState } from 'react';

export default function Chip({ label, onClick, onClose, padding, radius }) {
  const [selected, setSelected] = useState(false);

  const handleClick = () => {
    setSelected(!selected); // 클릭 시 선택 토글
    if (onClick) onClick();
  };

  return (
    <ChipWrapper
      padding={padding}
      radius={radius}
      selected={selected}
      onClick={handleClick}
    >
      <ChipLabel>{label}</ChipLabel>
      {onClose && (
        <ChipClose
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
        >
          ×
        </ChipClose>
      )}
    </ChipWrapper>
  );
}

const ChipWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  padding: ${({ padding = '6px 12px' }) => padding};
  border-radius: ${({ radius = '16px' }) => radius};
  background-color: ${({ selected }) => (selected ? '#2563eb' : '#f3f4f6')};
  color: ${({ selected }) => (selected ? 'white' : 'black')};
  font-size: 14px;
  cursor: pointer;
  margin: 4px;
  user-select: none;

  &:hover {
    background-color: ${({ selected }) => (selected ? '#2563eb' : '#e5e7eb')};
  }
`;

const ChipLabel = styled.span`
  margin-right: 8px;
`;

const ChipClose = styled.span`
  font-weight: bold;
  cursor: pointer;
`;
