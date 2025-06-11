
"use client"
import { Box, Button, Container, Typography, AppBar, Toolbar, Link, ThemeProvider } from '@mui/material';
import Image from 'next/image';
import crophome from '../../../public/image/Crophome.jpg'
import theme from '../styles/theme';
function WhyMustPPAP() {
  return (
    <>
    <Box>
    <Container maxWidth={false}
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

            display: { xs: "none", md: "flex", lg: "flex" },
            fontFamily: "Playfair Display",
            color: "white",
            textDecoration: "none",
            textWrap: "wrap"
            ,alignItems:"center"
            ,ml:"5px",
            fontSize:"60px"
          }}
        >
          Why<br /> Choose<br /> Pineapple <br />
          Island
        </Typography>
        </ThemeProvider>    
    
    
    <Box 
        sx={{
          display: { xs: "none", md: "flex", lg: "flex" },
       
        
          position: "relative",
          justifyContent:"flex-end",
          maxWidth:"1186px",
          width:"100%"
        }}
      >
        
        <Box
          sx={{
            
            boxShadow: 2,
            maxWidth: "477px",
            maxHeight:"634px",
            bgcolor: "white",
            display: { xs: "none", md: "flex", lg: "flex" },
            alignItems: "center",
            px: 10,
            wordBreak: "break-word",
              overflowWrap: "break-word", 
              Width: "100%",
              whiteSpace: "pre-line", 
            width:"100%"
          }}
        >
          
            <Typography
            
              variant="h6"
              noWrap
              
              component="a"
              sx={{
                maxHeight:"634px",
                minWidth:"372px",
                fontFamily: "Manrope",
                color: "#0E204E",
                textDecoration: "none",
                textWrap: "wrap",
              wordBreak: "break-word",
              overflowWrap: "break-word", 
              maxWidth: "100%",
              whiteSpace: "pre-line", 
      }}
            >
              Pineapple Island is the most sought-after community in Ibadan that
              values and puts the needs of their clients first. It is a
              territory with loft complexes that creates a country life and
              homely feeling that is integrated with industrial development. A
              perfect, professional built abode that gives you the true taste of
              beauty and happiness.
            </Typography>
            </Box>
        <Box>
        <Image
          alt="home about"
          src={crophome}
          priority={true}
          style={{
            maxWidth:"709px",
            width: "100%",
            height: "634px",
            objectFit:"cover"
          }}
        />
      </Box>
      </Box>
      </Container>
      </Box>
    
    </>
  )
}
export default WhyMustPPAP