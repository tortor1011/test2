
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
          clipPath:
            "polygon(50% 0%, 100% 0, 100% 100%, 84% 93%, 60% 80%, 0 100%, 0 0)"
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
        
        <Box
        sx={{
          display: { xs: "none", md: "flex", lg: "flex" },
          justifyContent:"flex-end",
          position: "absolute",
          mr:5,
          left:"700px",
          top:"70px"
          
        }}
      >
            <Box
          sx={{
            boxShadow: 2,
            bgcolor: "white",
            display: { xs: "none", md: "flex", lg: "flex" },
            alignItems: "center",
            px: 10,
            width:"450px",
            
          }}>
                
                  <Typography
                  variant='h6'
                  noWrap
                  component="a"
                  sx={{
                    fontFamily:"Manrope",
                    color: "#0E204E",
                    textDecoration:"none",
                    textWrap:"wrap",
                    
                  }}>
                  Pineapple Island is the most sought-after community in Ibadan that
                  values and puts the needs of their clients first. It is a
                  territory with loft complexes that creates a country life and
                  homely feeling that is integrated with industrial development. A
                  perfect, professional built abode that gives you the true taste of
                  beauty and happiness.
                    </Typography>
                
            </Box>
            <Image 
            alt='home about'
            src={crophome}
            priority={true}
            style={{
              maxWidth:"500px",
              width:"100%",
              maxHeight:"600px"
            }}

            
            />
        </Box>
        
        </Box>
        
    
    </>
  )
}
export default WhyMustPPAP