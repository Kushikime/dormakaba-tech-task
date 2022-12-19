import React, { ReactElement, FC, useEffect } from 'react';
import { Box } from '@mui/material';
import { ProtectedRoute } from './ProtectedRoute';
import { setAppLoading } from '../store/slices/app/appSlice';
import Filter from '../components/Filter';
import { useAppDispatch, useAppSelector } from '../hooks';
import FilmsList from '../components/FilmsList';
import PeopleList from '../components/PeopleList';
import PlanetsList from '../components/PlanetsList';
import SpeciesList from '../components/SpeciesList';
import StarshipsList from '../components/StarshipsList';
import VehiclesList from '../components/VehiclesList';

interface IDashboardPageProps {}

const Dashboard: FC<IDashboardPageProps> = (): ReactElement => {
  const selectedCategory = useAppSelector(
    (state) => state.app.selectedCategory
  );

  const renderList = () => {
    if (selectedCategory === 'films') {
      return <FilmsList />;
    }
    if (selectedCategory === 'people') {
      return <PeopleList />;
    }
    if (selectedCategory === 'planets') {
      return <PlanetsList />;
    }
    if (selectedCategory === 'species') {
      return <SpeciesList />;
    }
    if (selectedCategory === 'starships') {
      return <StarshipsList />;
    }
    if (selectedCategory === 'vehicles') {
      return <VehiclesList />;
    }
  };

  return (
      <Box
        sx={{
          flexGrow: 1,
          width: '100%',
          backgroundColor: 'white',
          display: 'flex',
          overflow: 'hidden',
          flexDirection: 'column',
          alignItems: 'center',
          px: '25px',
          py: '25px',
          maxWidth: '1600px',
        }}
      >
        <Filter />
        {renderList()}
      </Box>
  );
};

export default Dashboard;
