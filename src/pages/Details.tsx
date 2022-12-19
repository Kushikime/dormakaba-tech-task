import React, { ReactElement, FC, useEffect, useId } from 'react';
import { Box, Grid, IconButton, Typography } from '@mui/material';
import { ProtectedRoute } from './ProtectedRoute';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useAppSelector } from '../hooks';
import axios from 'axios';

interface IDetailsPageProps {}

const Details: FC<IDetailsPageProps> = (): ReactElement => {
  let navigate = useNavigate();
  let id = useId();

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
    if(url) {
      getData();
      return
    }
    navigate('/')
  }, [url]);

  return (
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
            overflowY: 'scroll',
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
                key={`${index}_${id}`}
              >
                <Typography>{key}:</Typography>
                {Array.isArray(apiData[key]) ? (
                  <Box width='100%'>
                    {apiData[key].map((item: any, index: number) => {
                      return (
                        <Typography key={`${item}_${index}`} ml='20px'>
                          {item},
                        </Typography>
                      );
                    })}
                  </Box>
                ) : (
                  <Typography ml='20px'>
                    {key === 'created' || key === 'edited'
                      ? new Date(apiData[key]).toLocaleString()
                      : apiData[key]}
                  </Typography>
                )}
              </Grid>
            ))
          ) : (
            <Typography>LOADING</Typography>
          )}
        </Box>
      </Box>
  );
};

export default Details;
