import styled from '@emotion/styled';

export const Container = styled.div`
  background-color: #f3f7ff; 
  min-height: 100vh; 
  padding: 40px 20px; 
  box-sizing: border-box;
`;

export const Navbar = styled.nav`
  max-width: 1000px; 
  margin: 0 auto 20px; 
  display: flex; 
  align-items: center;
`;

export const LogoWrapper = styled.div`
  display: flex; 
  align-items: center; 
  gap: 12px; 
  cursor: pointer;
  
  img { width: 120px; }
  
  .logo-circle {
    width: 60px; height: 60px; border-radius: 50%; background: white;
    display: flex; align-items: center; justify-content: center; overflow: hidden;
    img { width: 80%; }
  }
  span { font-size: 24px; font-weight: bold; color: #333; }
`;

export const MainCard = styled.div`
  max-width: 1000px; 
  width: 100%; 
  margin: 0 auto; 
  background: white;
  border-radius: 24px; 
  padding: 40px; 
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  display: flex; 
  flex-direction: column; 
  gap: 25px; 
  box-sizing: border-box;
`;

export const BackContainer = styled.div`
  display: flex; 
  align-items: center; 
  gap: 6px; 
  color: #9CA3AF; 
  cursor: pointer; 
  width: fit-content;
  transition: color 0.2s;
  &:hover { color: #587CFF; }
  span { font-size: 14px; }
`;

export const TitleSection = styled.div`
  h2 { font-size: 32px; font-weight: bold; margin: 0; color: #333; }
  .date-text { color: #6B7280; font-size: 16px; margin-top: 5px; display: block; }
`;

export const EditInputArea = styled.div`
  display: flex; 
  flex-direction: column; 
  gap: 15px;
  .name-input { 
    border: none; 
    border-bottom: 2px solid #587CFF; 
    font-size: 32px; 
    font-weight: bold; 
    outline: none; 
    width: 100%; 
    padding-bottom: 5px; 
    box-sizing: border-box;
    transition: border-color 0.2s;
    &::placeholder { color: #D1D5DB; }
  }
  .date-input-box { 
    display: flex; 
    align-items: center; 
    gap: 10px; 
    color: #6B7280; 
    input { 
      border: 1px solid #ddd; 
      padding: 8px; 
      border-radius: 6px; 
      font-family: inherit;
      background: #f9fafb; 
    } 
  }
`;

export const CategoryGroup = styled.div` 
  display: flex; 
  gap: 10px; 
  flex-wrap: wrap; 
`;

export const CategoryBtn = styled.button`
  padding: 10px 20px; 
  border-radius: 8px; 
  border: none; 
  cursor: pointer; 
  font-weight: bold; 
  font-size: 14px;
  background-color: ${(props) => (props.isSelected ? (props.activeColor || '#587CFF') : '#F3F4F4')};
  color: ${(props) => (props.isSelected ? 'white' : '#9CA3AF')};
  transition: all 0.2s ease;
  &:hover { opacity: 0.9; }
  &:disabled { cursor: default; }
`;

export const CardList = styled.div` 
  display: flex; 
  gap: 15px; 
  overflow-x: auto; 
  padding: 10px 5px; 
  &::-webkit-scrollbar { height: 8px; }
  &::-webkit-scrollbar-track { background: #f1f1f1; border-radius: 10px; }
  &::-webkit-scrollbar-thumb { background: #587CFF; border-radius: 10px; }
`;

export const PhotoCard = styled.div`
  min-width: 220px; 
  height: 220px; 
  border-radius: 16px; 
  overflow: hidden; 
  flex-shrink: 0; 
  position: relative;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1); 
  img { width: 100%; height: 100%; object-fit: cover; }
`;

export const DeleteImgBtn = styled.button`
  position: absolute; 
  top: 10px; 
  right: 10px; 
  width: 28px; 
  height: 28px; 
  border-radius: 50%;
  background: rgba(255, 75, 75, 0.9); 
  color: white; 
  border: none; 
  display: flex; 
  align-items: center; 
  justify-content: center;
  cursor: pointer; 
  z-index: 10;
  transition: transform 0.2s;
  &:hover { transform: scale(1.1); background: #ff4b4b; }
`;

export const AddMoreBtn = styled.div`
  min-width: 220px; 
  height: 220px; 
  border: 2px dashed #587CFF; 
  border-radius: 16px;
  display: flex; 
  flex-direction: column; 
  gap: 10px;
  align-items: center; 
  justify-content: center; 
  font-size: 40px; 
  color: #587CFF; 
  cursor: pointer; 
  flex-shrink: 0;
  background: #f8faff;
  transition: all 0.2s;
  &:hover { background: #eff3ff; border-style: solid; }
`;

export const MemoSection = styled.div`
  h3 { font-size: 18px; font-weight: bold; margin-bottom: 15px; color: #374151; }
`;

export const MemoBox = styled.div`
  background: #f9fafb; 
  border: 1px solid #e5e7eb; 
  border-radius: 12px; 
  padding: 20px; 
  min-height: 120px;
  box-sizing: border-box;

  textarea { 
    width: 100%; 
    min-height: 120px; 
    border: 1px solid #587cff; 
    border-radius: 8px; 
    padding: 15px; 
    resize: vertical; 
    font-family: inherit; 
    font-size: 15px; 
    outline: none; 
    box-sizing: border-box; 
    display: block;
    line-height: 1.6;
  }

  .memo-content { 
    display: flex; 
    justify-content: space-between; 
    align-items: flex-start;
    width: 100%;
    
    p { 
      margin: 0; 
      color: #4b5563; 
      white-space: pre-wrap; 
      line-height: 1.6; 
      flex: 1; 
      word-break: break-all;
    }
  }
`;

export const ActionWrapper = styled.div` 
  display: flex; 
  justify-content: flex-end; 
  margin-top: 20px; 
  gap: 10px; 
`;