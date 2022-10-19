import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import TwitterIcon from '@mui/icons-material/Twitter';
import { ImageListItem } from '@mui/material';

const ButtonAppBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }} style={{ width: "1800px" }}>
      <AppBar position="static" sx={{ backgroundColor: 'black' }} >
        <Toolbar>
          <InstagramIcon
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{
              mr: 2, ml: 170, mt: 10,
              '&:hover': {
                backgroundColor: '#DFFF00'
              }
            }}
          >
            <MenuIcon />
          </InstagramIcon>
          <YouTubeIcon
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{
              mr: 2, mt: 10,
              '&:hover': {
                backgroundColor: '#CCFB5D'
              }
            }}
          >
            <MenuIcon />
          </YouTubeIcon>
          <SportsEsportsIcon
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{
              mr: 2, mt: 10,
              '&:hover': {
                backgroundColor: '#CCFB5D'
              }
            }}
          >
            <MenuIcon />
          </SportsEsportsIcon>
          <TwitterIcon
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{
              mr: 2, mt: 10,
              '&:hover': {
                backgroundColor: '#CCFB5D',
              }
            }}
          >
            <MenuIcon />
          </TwitterIcon>

        </Toolbar>
      </AppBar>
      <ImageListItem sx={{ width: "400px", ml: 85, mt: -13 }}><img src="https://res.cloudinary.com/nfte/image/fetch/c_fit,q_auto,f_auto,dpr_auto/https://nfte.co/content/images/size/w300/2021/12/baycbanner.jpg" alt="bayc" /></ImageListItem>

    </Box>

  );
}

export default ButtonAppBar;
