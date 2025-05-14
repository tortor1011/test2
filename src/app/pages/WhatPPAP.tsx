import { Box, Button, Container, Typography, AppBar, Toolbar, Link,Grid } from '@mui/material';
import Image from 'next/image';
import FrameLogo1 from ".."
const WhatPPAP = () => {
  return (
    <>
    <Box 
    sx={{
         display: {xs:'none',md:'flex',lg:'flex'},
         justifyContent: "center",
          mb:12 }}> 
          {/* checked */}
      {/* Left: Text title */}
      <Box>
        <Typography
          variant="h2"
          fontWeight={700}
          sx={{ 
            mt:15,
            p:5,
            display: {xs:'none',md:'flex',lg:'flex'},
            fontFamily:"Playfair Display",
            color: "#0E204E",
            textDecoration: "none",
            textWrap: "wrap"
          }}
        >
          What Pineapple Land Offers
        </Typography>
      </Box>
    </Box> 
    {/* end of text */}
    <Box
    sx={{
        display:"flex",
        ml:10,
    }}
    >
        <Grid>
            <Grid>
                <Framelogo1 />
            </Grid>
        </Grid>

    </Box>
    </>
  )
}
export default WhatPPAP