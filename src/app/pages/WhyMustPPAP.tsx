
"use client"
import { Box, Button, Container, Typography, AppBar, Toolbar, Link, ThemeProvider } from '@mui/material';
import Image from 'next/image';
import crophome from '../../../public/image/Crophome.jpg'
import theme from '../styles/theme';
function WhyMustPPAP() {
  return (
    <>
    <Box
        sx={{
          display: { xs: "none", md: "flex", lg: "flex" },
          maxWidth: "1920px",
          width:"100%",
          height: "708px",
          bgcolor: "#0E204E",
          position:"relative",
          
        }}
      >
        <ThemeProvider theme={theme}>
        <Typography
          variant="h2"
          noWrap
          component="a"
          fontWeight={700}
          sx={{
            mt: 30,
            p: 6,
            ml: { xs: "none", md: 0, lg: 20 },
            display: { xs: "none", md: "flex", lg: "flex" },
            fontFamily: "Playfair Display",
            color: "white",
            textDecoration: "none",
            textWrap: "wrap"
          }}
        >
          Why<br /> Choose<br /> Pineapple <br />
          Island
        </Typography>
        </ThemeProvider>
          

        
            <Container maxWidth={false}
          sx={{
            boxShadow: 2,
            bgcolor: "white",
            display: { xs: "none", md: "flex", lg: "flex" },
            alignItems: "center",
            p: 10,
            maxWidth:"650px",
            textAlign:"center",
            whiteSpace: "normal",
            position:"absolute",
            justifyContent:"center",
            alignContent:"center",
            
          }}>
               <Box maxWidth={"50%"}> 
                  <Typography
                  variant='h6'
                  noWrap
                  component="a"
                  sx={{
                    fontFamily:"Manrope",
                    color: "#0E204E",
                    textDecoration:"none",
                    whiteSpace: "normal",
                    
                  }}>
                  Pineapple Island is the most sought-after community in Ibadan that
                  values and puts the needs of their clients first. It is a
                  territory with loft complexes that creates a country life and
                  homely feeling that is integrated with industrial development. A
                  perfect, professional built abode that gives you the true taste of
                  beauty and happiness.
                    </Typography>
                </Box>
            <Box maxWidth={"50%"}>
            <Image 
            alt='home about'
            src={crophome}
            priority={true}
            style={{
              maxWidth:"500px",
              width:"100%",
              maxHeight:"700px",
              objectFit: "cover",
              position:"relative"

            }}/>
            </Box>
            </Container>
        
        
        </Box>
        
    
    </>
  )
}
export default WhyMustPPAP