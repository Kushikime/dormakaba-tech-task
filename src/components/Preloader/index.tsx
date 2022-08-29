import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { FC } from 'react';
import { useAppSelector } from '../../hooks';

interface IPreloaderProps {}

const Preloader: FC<IPreloaderProps> = (props) => {
  const loading = useAppSelector((state) => state.app.loading);
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexGrow: 1,
        position: 'absolute',
        zIndex: 100,
        width: '100%',
        height: '100%',
        backgroundColor: '#fff',
        transition: '1s',
      }}
      className={`${loading ? 'animated' : 'animateFadeOut'}`}
    >
      <Typography
        variant='h6'
        noWrap
        component='div'
        sx={{
          display: {
            fontWeight: 600,
          },
        }}
        color='primary.light'
      >
        SwapiBrowser
      </Typography>
    </Box>
  );
};

export default Preloader;
