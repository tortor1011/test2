import { Box, Button, Container, Typography, AppBar, Toolbar, Link,Grid } from '@mui/material';
import Image from 'next/image';
import LogoFirstrow from "../styles/LogoFirstrow"
import Garden from "../../../public/image/garden.jpg"
import Garden2 from "../../../public/image/garden2.jpg"
import LogoSecondRow from '../styles/LogoSecondRow';
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
          display: { xs: "none", md: "flex", lg: "flex" },
          ml: 10
        }}
      >
        <Grid
          sx={{
            display: { sm: "none", md: "flex", lg: "flex" },
            mb: 10
          }}
        >
          <Grid
            size={6}
            sx={{
              display: { sm: "none", md: "flex", lg: "flex" },
              m: 10
            }}
          >
            <Box>
              <Box
                sx={{
                  width: "370px",
                  height: "195px",
                  bgcolor: "#0E204E",
                  position: "relative",
                  py: 10,
                  ml: 50,
                  mt: 10
                }}
              ></Box>
              <Image
                alt="home about"
                src={Garden}
                priority={true}
                style={{
                  margin: 50,
                  width: "560px",
                  height: "582px",
                  marginTop: "-500px",
                  position: "absolute"
                }}
              />
              
              
            </Box>
          </Grid>
          <Grid
            size={6}
            sx={{
              justifyContent: "end",
              alignContent: "center"
            }}
          >
            <LogoFirstrow />
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          display: { xs: "none", md: "flex", lg: "flex" },
          ml: 25
        }}
      >
        <Grid
          sx={{
            display: { sm: "none", md: "flex", lg: "flex" },
            mb: 50
          }}
        >
          <Grid
            size={6}
            sx={{
              justifyContent: "end",
              alignContent: "center"
            }}
          >
            <LogoSecondRow />
          </Grid>
          <Grid
            size={6}
            sx={{
              display: { sm: "none", md: "flex", lg: "flex" },
              py: 0,
              ml: 15
            }}
          >
            <Box>
              <Box
                sx={{
                  width: "400px",
                  height: "195px",
                  bgcolor: "#0E204E",
                  py: 10,
                  position: "relative",
                  mt: 2
                }}
              ></Box>
              <Image
                alt="home about"
                src={Garden2}
                priority={true}
                style={{
                  margin: 50,
                  marginLeft: "200px",
                  width: "568px",
                  height: "582px",
                  marginTop: "-500px",
                  position: "absolute"
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}
export default WhatPPAP