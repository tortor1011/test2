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
            width: "700px",
            height: "450px",
            bgcolor: "#0E204E",
            py: 10,
            position: "absolute",
            paddingBottom:0,
            ml: 50,
            mt: 20,
            mr: 124,
            
          }}
        >
          <Typography
            variant="h2"
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
              fontSize:18,
              ml: 4,
              mt: 2,
              display: { xs: "none", md: "flex", lg: "flex" },
              fontFamily: "manrope",
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
      <Box
        sx={{
          display: { xs: "flex", md: "none", lg: "none" }
        }}
      >
        <Image
          alt="home about"
          src={house}
          priority={true}
          style={{
            paddingLeft: "40px",
            paddingRight: "40px",
            position: "relative",
            width: "100%",
            height: "50%",
            filter: "brightness(0.60)"
          }}
        />
      </Box>
      <Box
        sx={{
          display: { xs: "flex", md: "none", lg: "none" },
          justifyContent: "center",
          mt: -55
        }}
      >
        <Typography
          variant="h5"
          
          fontWeight={700}
          sx={{
            fontFamily: "Playfair Display",
            position: "absolute",
            fontWeight: 700,
            textWrap: "wrap",
            color: "white",
            textDecoration: "none"
          }}
        >
          Pineapple Island:
        </Typography>
        <Typography
          variant="h5"
          
          fontWeight={700}
          sx={{
            fontFamily: "Playfair Display",
            mt: 4,
            position: "absolute",
            fontWeight: 700,
            textWrap: "wrap",
            color: "white",
            textDecoration: "none"
          }}
        >
          GenZ and Millenial Abode
        </Typography>

        <Typography
          
          sx={{
            fontFamily: "Manrope",
            mt: 10,
            position: "absolute",
            ml: 6,
            pr: 5,
            textWrap: "pretty",
            color: "white",
            textDecoration: "none",

            textAlign: "center"
          }}
        >
          a community that gives you a taste of happiness, a place you’ll love
          to live and an opportunity to build a home.
        </Typography>
        <Button
          variant="contained"
          sx={{
            fontFamily: "Manrope",
            textTransform: "none",
            color: "black",
            bgcolor: "white",
            mt: 25
          }}
        >
          Get in Touch
        </Button>
      </Box>
      
    
        
    

    </>
  );
}
