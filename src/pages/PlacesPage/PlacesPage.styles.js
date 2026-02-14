import styled from '@emotion/styled';

export const Container = styled.div`
  background-color: #f3f7ff;
  min-height: 100vh;
  padding: 40px 20px;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
`;

export const MainCard = styled.div`
  max-width: 900px;
  width: 100%;
  background: white;
  border-radius: 24px;
  padding: 40px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  min-height: 80vh;
`;

export const SectionTitle = styled.h2`
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 15px;
  color: #111;
`;

export const TripTitleBanner = styled.div`
  background-color: #333;
  color: white;
  padding: 8px 16px;
  border-radius: 6px;
  font-size: 14px;
  font-weight: bold;
  display: inline-block;
  width: fit-content;
  margin-bottom: 20px;
`;

export const TabSection = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 30px;
`;

export const TabButton = styled.button`
  padding: 8px 25px;
  font-size: 15px;
  font-weight: bold;
  border-radius: 8px;
  cursor: pointer;
  border: none;
  background-color: ${props => props.isActive ? '#587CFF' : '#E5E7EB'};
  color: ${props => props.isActive ? 'white' : '#6B7280'};
  transition: all 0.2s;
  &:hover {
    background-color: ${props => props.isActive ? '#587CFF' : '#D1D5DB'};
  }
`;

export const PlaceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  margin-bottom: 50px;
`;

export const PlaceCard = styled.div`
  background: #fff;
  border: 1px solid #eee;
  border-radius: 18px;
  overflow: hidden;
  cursor: pointer;
  position: relative;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  
  &:hover { 
    transform: translateY(-8px);
    box-shadow: 0 12px 20px rgba(0,0,0,0.08);
  }
`;

export const TrashIcon = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
  color: rgba(255, 255, 255, 0.8);
  background: rgba(0, 0, 0, 0.3); 
  width: 28px;
  height: 28px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  z-index: 5;
  transition: all 0.2s;
  
  &:hover { 
    background: #FF4B4B;
    color: white; 
    transform: scale(1.1);
  }
`;

export const DeleteConfirmCircle = styled.button`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 75, 75, 0.85); 
  border: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  z-index: 10;
  cursor: pointer;
  
  &::after {
    content: '삭제하기';
    font-size: 14px;
    font-weight: bold;
    margin-top: 8px;
  }
  
  svg { font-size: 30px; }
`;

export const ImagePlaceholder = styled.div`
  width: 100%;
  height: 150px; 
  background-color: #f8f9fa;
  overflow: hidden;
  
  img { 
    width: 100%; 
    height: 100%; 
    object-fit: cover; 
    transition: transform 0.5s;
  }
  
  ${PlaceCard}:hover & img {
    transform: scale(1.1); 
  }
`;

export const CardInfo = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  
  .name-text {
    font-size: 16px;
    font-weight: bold;
    color: #333;
    text-align: center;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .date { font-size: 13px; color: #aaa; }
`;

export const PlaceTag = styled.span`
  background-color: ${props => props.bgColor || '#587CFF'};
  color: white;
  padding: 4px 12px;
  border-radius: 6px;
  font-size: 12px;
  font-weight: bold;
`;

export const AddCard = styled.div`
  min-height: 235px; 
  border: 2px dashed #ddd;
  border-radius: 18px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  color: #587CFF;
  cursor: pointer;
  transition: all 0.2s;
  
  &::after {
    content: '장소 추가';
    font-size: 14px;
    font-weight: bold;
  }

  &:hover { 
    background: #f0f4ff; 
    border-color: #587CFF;
    transform: translateY(-5px);
  }
`;

export const FooterArea = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: auto;
  padding-top: 30px;
`;