import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import { FC } from 'react';
import LogoutIcon from '@mui/icons-material/Logout';
import { setAppLoading } from '../../store/slices/app/appSlice';
import { setAuthorized } from '../../store/slices/user/userSlice';
import { useAppDispatch } from '../../hooks';

interface IDrawerContentProps {
  toggleDrawer: () => void;
}

export const DrawerContent: FC<IDrawerContentProps> = (props) => {
  const { toggleDrawer } = props;
  const dispatch = useAppDispatch();

  const logout = () => {
    dispatch(setAppLoading(true));
    dispatch(setAuthorized(false));
  };

  return (
    <Box onClick={toggleDrawer} sx={{ textAlign: 'center' }}>
      <Typography
        variant='h5'
        noWrap
        component='div'
        sx={{
          flexGrow: 1,
          display: { sm: 'block', fontWeight: 600 },
          py: '20px',
        }}
        color='primary.light'
      >
        SwapiDK
      </Typography>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={logout}>
            <ListItemIcon>
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText primary={'Log out'} />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
};
