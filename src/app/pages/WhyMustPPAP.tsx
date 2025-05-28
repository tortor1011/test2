import { Box, Button, Container, Typography, AppBar, Toolbar, Link } from '@mui/material';
import Image from 'next/image';
import crophome from '../../../public/image/Crophome.jpg'
function WhyMustPPAP() {
  return (
    <>
    <Box
        sx={{
          display: { xs: "none", md: "flex", lg: "flex" },
          width: "1920px",
          height: "708px",
          bgcolor: "#0E204E",

          clipPath:
            "polygon(50% 0%, 100% 0, 100% 100%, 84% 93%, 60% 80%, 0 100%, 0 0)"
        }}
      >
        <Typography
          variant="h2"
          noWrap
          component="a"
          fontWeight={700}
          sx={{
            mt: 30,
            p: 6,
            ml: 20,
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
        </Box>
        
        <Box
        sx={{
          display: { xs: "none", md: "flex", lg: "flex" },
          ml: { xs: "none", md: 10, lg: 70 },
          mt: -75,
          position: "absolute"
        }}
      >
            <Box
          sx={{
            boxShadow: 2,
            bgcolor: "white",
            display: { xs: "none", md: "flex", lg: "flex" },
            alignItems: "center",
            px: 10,
            width:"450px"
          }}>
                <Box>
                  <Typography
                  variant='h6'
                  noWrap
                  component="a"
                  sx={{
                    fontFamily:"Manrope",
                    color: "#0E204E",
                    textDecoration:"none",
                    textWrap:"wrap"
                  }}>
                  Pineapple Island is the most sought-after community in Ibadan that
                  values and puts the needs of their clients first. It is a
                  territory with loft complexes that creates a country life and
                  homely feeling that is integrated with industrial development. A
                  perfect, professional built abode that gives you the true taste of
                  beauty and happiness.
                    </Typography>
                </Box>
            </Box>
            <Image 
            alt='home about'
            src={crophome}
            priority={true}
            style={{
              width:"50%",
              height:"600px"
            }}

            
            />
        </Box>
    
    </>
  )
}
export default WhyMustPPAP