import { Box, Button, Container, Typography, AppBar, Toolbar, Link } from '@mui/material';
import Image from 'next/image';
import Head from 'next/head';
import house from '../../../public/image/house.jpg'

export default function Home() {
  return (
    <>
      <Box
        sx={{
          display: { xs: "none", md: "flex", lg: "flex" },
          justifyContent: "flex-end",
          mb: 12
        }}
      >
        <Image
        src={house}     
        alt="Modern House"
        width={1368}        
        height={717}        
        style={{ 
          position: "relative", 
          clipPath: "polygon(100% 0, 100% 100%, 79% 83%, 0 100%, 0 0)" 
        }}
          priority={true}
        />
        <Box
          sx={{
            width: "650px",
            height: "400px",
            bgcolor: "#0E204E",
            py: 10,
            position: "absolute",
            paddingBottom:0,
            ml: 50,
            mt: 20,
            mr: 125
          }}
        >
          <Typography
            variant="h3"
            noWrap
            
            fontWeight={700}
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex", lg: "flex" },
              fontFamily: "Playfair Display",
              fontWeight: 700,
              color: "white",
              textDecoration: "none",
              justifyContent: "center",
              alignContent: "center",
              letterSpacing: 2
            }}
          >
            Pineapple Island: <br /> GenZ and Millenial <br /> Abode
          </Typography>
          <Typography
            noWrap
            
            sx={{
              ml: 6,
              mt: 2,
              display: { xs: "none", md: "flex", lg: "flex" },
              fontFamily: "Manrope",
              color: "white",
              textDecoration: "none",
              justifyContent: "center"
            }}
          >
            a community that gives you a taste of happiness, a place you’ll love
            to <br />
            live and an opportunity to build a home.
          </Typography>
        </Box>
      </Box>

    </>
  );
}
