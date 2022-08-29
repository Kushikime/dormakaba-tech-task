import { Button, styled, TextField, Typography, useTheme } from '@mui/material';
import { Box } from '@mui/system';
import { FC, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import {
  filmsSelector,
  peopleSelector,
  planetsSelector,
  speciesSelector,
  starshipsSelector,
  vehiclesSelector,
} from '../../hooks/selectors';
import { getCategoryData } from '../../store/slices/app/actions';
import {
  categoriesType,
  setSelectedCategory,
} from '../../store/slices/app/appSlice';

interface IFilterProps {}

const Filter: FC<IFilterProps> = (props) => {
  const dispatch = useAppDispatch();
  const categories = useAppSelector((state) => state.app.categories);
  const selectedCategory = useAppSelector(
    (state) => state.app.selectedCategory
  );

  const films = useAppSelector((state) => filmsSelector(state));
  const people = useAppSelector((state) => peopleSelector(state));
  const planets = useAppSelector((state) => planetsSelector(state));
  const species = useAppSelector((state) => speciesSelector(state));
  const starships = useAppSelector((state) => starshipsSelector(state));
  const vehicles = useAppSelector((state) => vehiclesSelector(state));

  const fetching = useAppSelector((state) => state.app.fetching);

  const onCategorySelect = (name: categoriesType) => {
    dispatch(setSelectedCategory(name));
  };

  useEffect(() => {
    if (selectedCategory) {
      if (selectedCategory === 'films' && !films.items.length) {
        dispatch(getCategoryData());
      }
      if (selectedCategory === 'people' && !people.items.length) {
        dispatch(getCategoryData());
      }
      if (selectedCategory === 'planets' && !planets.items.length) {
        dispatch(getCategoryData());
      }
      if (selectedCategory === 'species' && !species.items.length) {
        dispatch(getCategoryData());
      }
      if (selectedCategory === 'starships' && !starships.items.length) {
        dispatch(getCategoryData());
      }
      if (selectedCategory === 'vehicles' && !vehicles.items.length) {
        dispatch(getCategoryData());
      }
    }
  }, [selectedCategory]);

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        flexWrap: 'wrap',
        gap: '10px',
        position: 'relative',
        m: '20px 0'
      }}
      component='div'
    >
      {categories.map((category: categoriesType) => {
        return (
          <Button
            disabled={fetching}
            key={category}
            sx={{
              backgroundColor:
                selectedCategory === category
                  ? 'rgba(0, 0, 0, 1)'
                  : 'rgba(0, 0, 0, 0.05)',
              ':hover': {
                backgroundColor:
                  selectedCategory === category
                    ? 'rgba(0, 0, 0, 1)'
                    : 'rgba(0, 0, 0, 0.05)',
                color: selectedCategory === category ? 'white' : 'currentColor',
              },
              "&:disabled": {
                color: selectedCategory === category ? 'white' : ''
              },
              color: selectedCategory === category ? 'white' : 'currentColor',
            }}
            onClick={() => {
              onCategorySelect(category);
            }}
          >
            {category}
          </Button>
        );
      })}
    </Box>
  );
};

export default Filter;
