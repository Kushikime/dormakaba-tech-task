import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from '@mui/material';
import { FC, ReactElement } from 'react';
import { DrawerContent } from './DrawerContent';

interface IDrawerProps {
  window?: () => Window;
  mobileOpen: boolean;
  toggleDrawer: () => void;
}

const drawerWidth = 240;

const DrawerWrap: FC<IDrawerProps> = (props): ReactElement => {
  const { window, toggleDrawer, mobileOpen } = props;

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box component='nav'>
      <Drawer
        container={container}
        variant='temporary'
        open={mobileOpen}
        onClose={toggleDrawer}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', lg: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
      >
        <DrawerContent toggleDrawer={toggleDrawer} />
      </Drawer>
    </Box>
  );
};

export default DrawerWrap;
