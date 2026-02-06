import { useNavigate } from 'react-router-dom';
import Card from '../../components/Card';
import Select from '../../components/Select';
import { useState } from 'react';
import {
  PageWrapper,
  Grid,
  ClickWrapper,
  FloatingAddButton,
  CardInner,
  Country,
  Period,
  FilterBar,
} from './TripsPage.styles';

const TRAVEL_FILTER_OPTIONS = [
  { label: '새로운 여행', value: 'New' },
  { label: '다녀온 여행', value: 'Past' },
];

const MOCK_TRAVELS = [
  {
    id: 1,
    country: '대전',
    period: '24.09.07.-24.09.10.',
    status: 'New',
  },
  {
    id: 2,
    country: '바르셀로나',
    period: '24.12.14.-24.12.19.',
    status: 'Past',
  },
  {
    id: 3,
    country: '오사카',
    period: '25.01.22.-25.01.25.',
    status: 'New',
  },
];

export default function TripsPage() {
  const navigate = useNavigate();
  const [filter, setFilter] = useState('New');

  const filteredTravels = MOCK_TRAVELS.filter(
    (travel) => travel.status === filter,
  );

  return (
    <PageWrapper>
      <h1>나의 여행</h1>
      <FilterBar>
        <Select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          options={TRAVEL_FILTER_OPTIONS}
          width="160px"
        />
      </FilterBar>
      <Grid>
        {filteredTravels.map((travel) => (
          <ClickWrapper
            key={travel.id}
            onClick={() => navigate(`/trips/${travel.id}/places`)}
          >
            <Card padding="0" radius="12px">
              <CardInner>
                <Country>{travel.country}</Country>
                <Period>{travel.period}</Period>
              </CardInner>
            </Card>
          </ClickWrapper>
        ))}
      </Grid>

      <FloatingAddButton onClick={() => navigate('/trips/new')}>
        +
      </FloatingAddButton>
    </PageWrapper>
  );
}
