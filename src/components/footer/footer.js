import React from 'react';
import { ImageListItem, Button, Link } from '@mui/material';
import './footer.css';
import SendIcon from '@mui/icons-material/Send';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import TwitterIcon from '@mui/icons-material/Twitter';


const Footer = () => {
  return (
    <>

      <div>
        <label className='lb'>GET ON THE LIST</label><br />
        <input type="text" id="email" name="email" placeholder='Email Address' />
        <Button style={{ marginTop: "3px", paddingTop: "4px", paddingBottom: "5px", backgroundColor: "gray", marginLeft: "-2px", height: "28px" }} variant="contained" endIcon={<SendIcon />}></Button>
      </div>
      <div>
        <ImageListItem sx={{ width: "200px", ml: -25, mt: -8 }}><img src="https://ik.imagekit.io/bayc/assets/bayc-footer.png" alt="icon" /></ImageListItem>
      </div>
      <Box sx={{ flexGrow: 1 }} style={{ width: "1800px" }}>
        <AppBar position="static" sx={{ backgroundColor: 'black' }} >
          <Toolbar>
            <InstagramIcon
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{
                mr: 2, ml: 170, mt: -40,
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
                mr: 2, mt: -40,
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
                mr: 2, mt: -40,
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
                mr: 2, mt: -40,
                '&:hover': {
                  backgroundColor: '#CCFB5D',
                }
              }}
            >
              <MenuIcon />
            </TwitterIcon>
          </Toolbar>
        </AppBar>
      </Box>
      <p className='foot_par'>© 2021 Yuga Labs LLC</p>
      <Link style={{ marginLeft: "1120px", marginTop: "-1px" }} href="https://boredapeyachtclub.com/#/terms" variant="body2">
        {'BAYC Terms & Conditions'}
      </Link>
      <Link style={{ marginLeft: "1120px" }} href="https://boredapeyachtclub.com/#/mayc/terms" variant="body2">
        {'MAYC Terms & Conditions'}
      </Link>

    </>
  )
}

export default Footer;
