// CoDev - A GPT 4.0 A GPT 4.0 Virtual Developer, by twitter.com/@etherlegend

import React from 'react';
import {
  Container,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import MenuIcon from '@mui/icons-material/Menu';
import InboxIcon from '@mui/icons-material/Inbox';
import EmailList from './components/EmailList';

const useStyles = makeStyles({
  appBar: {
    zIndex: 1201,
  },
  drawer: {
    width: 240,
  },
  menuButton: {
    marginRight: 16,
  },
  content: {
    flexGrow: 1,
    padding: '24px',
  },
});

const App: React.FC = () => {
  const classes = useStyles();
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const drawerContent = (
    <List>
      <ListItem button>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Inbox" />
      </ListItem>
    </List>
  );

  return (
    <>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">Dashboard App</Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer}
        className={classes.drawer}
      >
        {drawerContent}
      </Drawer>
      <Container maxWidth="md" className={classes.content}>
        <Toolbar />
        <EmailList />
      </Container>
    </>
  );
};

export default App;
