import { Box, Grid, Skeleton, Typography } from '@mui/material';
import { FC, useEffect, useRef, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import CardListItem from '../CardListItem';

import { getCategoryNextPageData } from '../../store/slices/app/actions';

interface ICardListProps {
  items: any[];
  currentPage: number;
  totalPages: number;
  handlePagination: (page: number) => void;
}

const CardList: FC<ICardListProps> = (props) => {
  const { currentPage, items, totalPages, handlePagination } = props;
  const fetching = useAppSelector((state) => state.app.fetching);
  const dispatch = useAppDispatch();
  const selectedCategory = useAppSelector(
    (state) => state.app.selectedCategory
  );
  const listRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (currentPage >= totalPages) return;
    if (listRef.current) {
      const { scrollHeight, scrollTop, clientHeight } = listRef.current;
      const scroll = scrollHeight - scrollTop - clientHeight;

      if (scroll < 10 && currentPage < totalPages && !fetching) {
        handlePagination(currentPage + 1);
      }
    }
  };

  const loadNextData = () => {
    const data = {
      page: currentPage,
      category: selectedCategory,
    };

    dispatch(getCategoryNextPageData(data));
  };

  useEffect(() => {
    if (currentPage > 1 && currentPage < totalPages && !fetching) {
      loadNextData();
    }
  }, [currentPage]);

  useEffect(() => {
    handleScroll();
  }, [fetching]);

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexGrow: 1,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      flexDirection='column'
    >
      <Grid
        container
        columns={12}
        spacing={3}
        sx={{ overflowY: 'scroll' }}
        pr={'10px'}
        ref={listRef}
        component={'div'}
        onScroll={handleScroll}
      >
        {items.map((item, index) => (
          <Grid key={`${item.url}_${index}`} item xs={12} sm={6} md={4}>
            <CardListItem item={item} />
          </Grid>
        ))}
        <Grid
          item
          xs={12}
          sx={{ opacity: fetching ? 1 : 0, transition: 'all linear 0.8s' }}
        >
          <Skeleton animation='wave' />
          <Skeleton animation='wave' />
          <Skeleton animation='wave' />
        </Grid>
      </Grid>

      {items.length > 0 && (
        <Grid
          container
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            minHeight: '40px',
            mt: '20px',
          }}
        >
          <Typography>
            PAGE {currentPage} / {totalPages}
          </Typography>
        </Grid>
      )}

      {!items.length && !fetching && (
        <Grid
          sx={{
            backgroundColor: 'rgba(0,0,0,0.05)',
            py: '40px',
            width: '100%',
            borderRadius: '10px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Typography variant='h4' component='p'>
            There are no such resource.
          </Typography>
        </Grid>
      )}
    </Box>
  );
};

export default CardList;
