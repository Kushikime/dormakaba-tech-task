import { Box, Button, Grid, IconButton, ListItem } from '@mui/material';
import { FC } from 'react';

import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useAppDispatch } from '../../hooks';
import { setSelectedUrl } from '../../store/slices/app/appSlice';
import { useNavigate } from 'react-router-dom';
interface ICardListItemProps {
  item: any;
}

const CardListItem: FC<ICardListItemProps> = (props) => {
  const { item } = props;

  const dispatch = useAppDispatch();
  let navigate = useNavigate();

  const getTitle = () => {
    return item.name || item.title;
  };

  const onDetailsClick = (url: string) => {
    dispatch(setSelectedUrl(url));
    navigate('/details');
  };

  return (
    <Grid
      container
      sx={{
        background: 'rgba(0,0,0,0.05)',
        minHeight: {
          xs: '50px',
          sm: '75px',
        },
        borderRadius: {
          xs: '5px',
          sm: '10px',
        },
      }}
    >
      <Grid
        item
        xs={10}
        sx={{ display: 'flex', alignItems: 'center', pl: '20px' }}
      >
        {getTitle()}
      </Grid>
      <Grid item xs={2} sx={{ display: 'flex', alignItems: 'center' }}>
        <IconButton
          sx={{
            backgroundColor: 'primary.light',
            color: 'common.white',
            mr: '10px',
            ':hover': { backgroundColor: 'primary.dark' },
            display: {
              lg: 'flex',
            },
          }}
          size='small'
          onClick={() => {
            onDetailsClick(item.url);
          }}
        >
          <NavigateNextIcon />
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default CardListItem;
