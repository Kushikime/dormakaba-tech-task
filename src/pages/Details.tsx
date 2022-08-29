import React, { ReactElement, FC, useEffect } from 'react';
import { Box, Button, Grid, IconButton, Typography } from '@mui/material';
import { ProtectedRoute } from './ProtectedRoute';
import { Link, useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useAppSelector } from '../hooks';
import axios from 'axios';

interface IDetailsPageProps {}

const Details: FC<IDetailsPageProps> = (): ReactElement => {
  let navigate = useNavigate();

  const onBackClick = () => navigate(-1);
  const selectedCategory = useAppSelector(
    (state) => state.app.selectedCategory
  );
  const url = useAppSelector((state) => state.app.selectedUrl);
  const [apiData, setApiData] = React.useState<any>(null);

  const getData = async () => {
    if (apiData) {
      return apiData;
    }

    const response = await axios.get(url);
    const data = await response.data;
    setApiData(data);
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    console.log('NEW DATA: ', apiData);
  }, [apiData]);

  return (
    <ProtectedRoute>
      <Box
        sx={{
          flexGrow: 1,
          width: '100%',
          display: 'flex',
          overflow: 'hidden',
          flexDirection: 'column',
          alignItems: 'center',
          p: '40px 25px',
        }}
      >
        <Box
          sx={{
            flexGrow: 1,
            width: '100%',
            display: 'flex',
            overflow: 'hidden',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: 'rgba(0,0,0,0.05)',
            borderRadius: '10px',
            py: '25px',
            px: '25px',
            maxWidth: {
              sm: '100%',
              md: '968px',
            },
          }}
        >
          <Grid container display='flex' alignItems='center'>
            <IconButton
              sx={{
                backgroundColor: 'trabsparent',
                color: 'common.black',
                mr: '10px',
                ':hover': { backgroundColor: 'primary.dark' },
                display: {
                  lg: 'flex',
                },
              }}
              size='small'
              onClick={onBackClick}
            >
              <ArrowBackIcon />
            </IconButton>

            <Typography>{selectedCategory}</Typography>
          </Grid>
          {apiData ? (
            Object.keys(apiData).map((key, index) => (
              <Grid
                display='flex'
                width='100%'
                py='10px'
                key={`${index}_${'ss'}`}
              >
                <Typography>{key}:</Typography>
                <Typography ml='20px'>{apiData[key]}</Typography>
              </Grid>
            ))
          ) : (
            <Typography>LOADING</Typography>
          )}
        </Box>
      </Box>
    </ProtectedRoute>
  );
};

export default Details;
