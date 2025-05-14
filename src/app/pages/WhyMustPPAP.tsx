import { Box, Button, Container, Typography, AppBar, Toolbar, Link } from '@mui/material';
import Image from 'next/image';
import crophome from '../../../public/image/Crophome.jpg'
function WhyMustPPAP() {
  return (
    <>
    <Box sx={{
      display: {xs:"none",md:"flex",lg:"flex"},
      border:"1px solid red",
      
      width:"1920px",
      height:"700px",
      bgcolor: "#0E204E",
      clipPath:
            "polygon(50% 0%, 100% 0, 100% 100%, 84% 93%, 60% 80%, 0 100%, 0 0)"
    }}
      >
        <Box>
          <Typography
          variant='h3'
          noWrap
          component="a"
          fontWeight={700}
          sx={{
            mt:30,
            p:6,
            ml:20,
            display:{xs:"none",md:"flex",lg:"flex"},
            fontFamily:"Playfair Display",
            textWrap:"wrap",
            color:"white",
            textDecoration:"none",

          }}>
            Why Choose <br/> Pineapple Island
          </Typography>
        </Box>
        
        <Box 
            sx={{
              border:"1px solid yellow",
              position:"absolute",
              ml:70,
              mt:-70,
              display:{xs:"none",md:"flex",lg:"flex"}}}>
            
            <Box sx={{border:"1px solid green",
              boxShadow:2,
              width:"377px",
              bgcolor:"white",
              display:{xs:"none",md:"flex",lg:"flex"},
              alignItems:"center",
              px:10
            }}>
                <Box>
                  <Typography
                  variant='h6'
                  noWrap
                  component="a"
                  sx={{
                    fontFamily:"Manrope",
                    color: "#0E204E",
                    textDecoration:"none"
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
              width:"80%",
              height:"700px"
            }}

            
            />
        </Box>
    </Box>
    </>
  )
}
export default WhyMustPPAP