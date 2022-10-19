import { Button } from '@mui/material';
import React from 'react';
import './home.css';

const Home = () => {
  return (
    <>
    
      <div>
        <img src="https://www.thestreet.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cg_faces:center%2Cq_auto:good%2Cw_768/MTgyMDU3NjUzNDA3NTg5NTA3/screen-shot-2021-06-28-at-14624-pm.png" alt="" />
        <h2 className='heading1'>WELCOME TO</h2>
        <h2>THE BORED APE</h2>
        <h2>YACHT CLUB</h2>
        <Button style={{
          borderRadius: 10,
          backgroundColor: "#DFFF00",
          color: "black",
          fontSize: "16px",
          fontWeight: 600,
          padding: "15px 36px",
          width: "270px",
          marginLeft: "150px"
        }} variant="contained">Enter</Button>
        <hr class="solid" style={{ width: "300px", marginLeft: "130px", marginTop: "12px" }}></hr>
        <br />
      </div>

      <div>
        <p>A limited NFT collection where the token itself doubles as your membership to a swamp </p>
        <p>club for apes. The club is open! Ape in with us.</p>
      </div>
      <hr class="solid" style={{ width: "88%", marginTop: "60px" }}></hr>
    
    </>

  )
}

export default Home;
