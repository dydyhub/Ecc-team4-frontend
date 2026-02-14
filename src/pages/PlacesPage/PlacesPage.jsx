import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FiPlus, FiX, FiTrash2 } from 'react-icons/fi';
import axios from 'axios'; // axios 추가
import defaultImg from '../../assets/emptyimage.png';
import {
  Container,
  MainCard,
  SectionTitle,
  TripTitleBanner,
  TabSection,
  TabButton,
  PlaceGrid,
  PlaceCard,
  TrashIcon,
  DeleteConfirmCircle,
  ImagePlaceholder,
  CardInfo,
  PlaceTag,
  AddCard,
  FooterArea
} from './PlacesPage.styles';
import Button from '../../components/Button';

function PlacesPage() {
  const { tripId } = useParams();
  const navigate = useNavigate();
  
  const [activeTab, setActiveTab] = useState('place');
  const [deleteModeId, setDeleteModeId] = useState(null);
  const [places, setPlaces] = useState([]);

  const getCategoryColor = (category) => {
    const colors = {
      '관광': '#EF4444', '체험': '#F97316', '쇼핑': '#2DD4BF',
      '음식': '#22C55E', '숙소': '#A855F7', '카페/디저트': '#FACC15'
    };
    return colors[category] || '#587CFF';
  };

  // 1. 장소 목록 조회 API 연동
  useEffect(() => {
    const fetchPlaces = async () => {
      try {
        const response = await axios.get(`/trips/${tripId}/places`);
        setPlaces(response.data); 
      } catch (error) {
        console.error("장소 목록을 불러오는데 실패했습니다.", error);
      }
    };
    fetchPlaces();
  }, [tripId]);

  const toggleDeleteMode = (id, e) => {
    e.stopPropagation();
    setDeleteModeId(deleteModeId === id ? null : id);
  };

  // 2. 장소 삭제 API 연동
  const handleDelete = async (placeId, e) => {
    e.stopPropagation();
    if (window.confirm('이 장소를 삭제하시겠습니까?')) {
      try {
        await axios.delete(`/trips/${tripId}/places/${placeId}`);
        setPlaces(prev => prev.filter(p => p.placeId !== placeId)); // UI 업데이트
        setDeleteModeId(null);
      } catch (error) {
        alert('장소 삭제에 실패했습니다.');
      }
    }
  };

  return (
    <Container onClick={() => setDeleteModeId(null)}>
      <MainCard>
        <SectionTitle>MY VISITS</SectionTitle>
        <TripTitleBanner>여행 장소 관리</TripTitleBanner>

        <TabSection>
          <TabButton isActive={activeTab === 'schedule'} onClick={() => setActiveTab('schedule')}>일정</TabButton>
          <TabButton isActive={activeTab === 'place'} onClick={() => setActiveTab('place')}>장소</TabButton>
        </TabSection>

        <PlaceGrid>
          {places.map((place) => (
            <PlaceCard key={place.placeId} onClick={() => navigate(`/trips/${tripId}/places/${place.placeId}`)}>
              <TrashIcon onClick={(e) => toggleDeleteMode(place.placeId, e)}>
                <FiTrash2 />
              </TrashIcon>
              
              {deleteModeId === place.placeId && (
                <DeleteConfirmCircle onClick={(e) => handleDelete(place.placeId, e)}>
                  <FiX />
                </DeleteConfirmCircle>
              )}

              <ImagePlaceholder>
                {/* 명세서의 coverImageUrl 사용 */}
                <img src={place.coverImageUrl || defaultImg} alt={place.name} />
              </ImagePlaceholder>

              <CardInfo>
                <PlaceTag bgColor={getCategoryColor(place.category)}>{place.category}</PlaceTag>
                <PlaceTag bgColor="#eee" style={{ color: '#333', marginLeft: '5px' }}>{place.name}</PlaceTag>
                <span className="date">{place.createdAt?.split('T')[0]}</span>
              </CardInfo>
            </PlaceCard>
          ))}
          <AddCard onClick={() => navigate(`/trips/${tripId}/places/new`)}>
            <FiPlus />
          </AddCard>
        </PlaceGrid>

        <FooterArea>
          <Button bg="#587CFF" color="white" radius="50px" padding="12px 40px" onClick={() => navigate('/trips/new')}>
            새로운 여행으로 이동하기
          </Button>
        </FooterArea>
      </MainCard>
    </Container>
  );
}

export default PlacesPage;