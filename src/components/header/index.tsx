import {
  AppBar,
  Box,
  Button,
  IconButton,
  Input,
  InputBase,
  Toolbar,
  Typography,
} from '@mui/material';
import {
  ChangeEvent,
  FC,
  ReactElement,
  useCallback,
  useEffect,
  useState,
} from 'react';

import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import DrawerWrap from '../drawer';
import { setAuthorized } from '../../store/slices/user/userSlice';
import { setAppLoading, setSearchQuery } from '../../store/slices/app/appSlice';
import { useAppDispatch, useAppSelector } from '../../hooks';
import useDebounce from '../../hooks/useDebounce';
import { getCategoryDataBySearch } from '../../store/slices/app/actions';

interface IHeaderProps {}

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.05),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '16ch',
      '&:focus': {
        width: '22ch',
      },
    },
  },
}));

const Header: FC<IHeaderProps> = (props): ReactElement => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const toggleDrawer = () => setMobileOpen((prev) => !prev);
  const authorized = useAppSelector((state) => state.user.authorized);
  const dispatch = useAppDispatch();

  const search = useAppSelector((state) => state.app.searchQuery);
  const [searchValue, setSearchValue] = useState('');
  const debouncedValue = useDebounce<string>(searchValue, 800);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const debounceSearch = () => {
    dispatch(setSearchQuery(debouncedValue));
    dispatch(getCategoryDataBySearch());
  };

  useEffect(() => {
    if (!debouncedValue) return;
    debounceSearch();
  }, [debouncedValue]);

  const logout = () => {
    dispatch(setAppLoading(true));
    dispatch(setAuthorized(false));
  };

  return (
    <Box
      sx={{
        width: '100%',
        height: '50px',
        borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
        boxShadow: 'none',
        position: 'relative',
      }}
    >
      <AppBar position='relative' elevation={2}>
        <Toolbar sx={{ textAlign: authorized ? '' : 'center' }}>
          {authorized && (
            <IconButton
              size='large'
              edge='start'
              color='inherit'
              aria-label='open drawer'
              sx={{ mr: 2, display: { lg: 'none' } }}
              onClick={toggleDrawer}
            >
              <MenuIcon />
            </IconButton>
          )}
          <Typography
            variant='h6'
            noWrap
            component='div'
            sx={{
              flexGrow: 1,
              display: {
                xs: authorized ? 'none' : '',
                sm: 'block',
                fontWeight: 600,
              },
            }}
            color='primary.light'
          >
            SwapiBrowser
          </Typography>
          {authorized && (
            <>
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  value={searchValue}
                  onChange={handleSearch}
                  placeholder='Search…'
                  inputProps={{ 'aria-label': 'search' }}
                />
              </Search>
              <Button
                variant='contained'
                sx={{
                  backgroundColor: 'primary.light',
                  color: 'common.white',
                  ml: '10px',
                  ':hover': { backgroundColor: 'primary.dark' },
                  display: {
                    xs: 'none',
                    lg: 'flex',
                  },
                }}
                endIcon={<LogoutIcon />}
                onClick={logout}
              >
                Log out
              </Button>
              <DrawerWrap mobileOpen={mobileOpen} toggleDrawer={toggleDrawer} />
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
