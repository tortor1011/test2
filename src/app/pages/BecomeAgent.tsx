"use client"
import { Box, Button, Container, Typography, AppBar, Toolbar, Link,Grid, ThemeProvider } from '@mui/material';
import Image from 'next/image';
import girl from "../../../public/image/ReplaceGirl.jpg"
import theme from '../styles/theme';
function BecomeAgent() {
  return (
    <>
    <Container maxWidth={false}
        sx={{
          display: { xs: "none", md: "flex", lg: "flex" }
        }}
      >

        <Box maxWidth={"50%"}
        sx={{ width: "100%", 
        display: { xs: "none", md: "flex", lg: "flex" }, 
        justifyContent:"center",
        gap:"30px"
        }}>
            <Box
              sx={{
                width: "552px",
                height: "200px",
                position: "relative",
              }}
            >
              <ThemeProvider theme={theme} >
              <Typography
                variant="h2"
                noWrap
                component="a"
                fontWeight={700}
                sx={{
                  mb: 3,
                  display: { xs: "none", md: "flex", lg: "flex" },
                  fontFamily: "Playfair Display",
                  color: "#0E204E",
                  textDecoration: "none",
                  textWrap: "wrap"
                }}
              >
                Become an
                <br /> Agent
              </Typography>
              </ThemeProvider>
              <Typography
                noWrap
                component="a"
                sx={{
                  fontFamily: "Manrope",
                  color: "#0E204E",
                  textDecoration: "none",
                  textWrap: "pretty",
                  justifyContent: "center",
                  mb:5
                }}
              >
                a community that gives you a taste of <br /> happiness, a place
                you’ll love to live and an
                <br /> opportunity to build a home.
              </Typography>

              <Button
                variant="contained"
                sx={{
                  fontFamily: "Manrope",
                  textTransform: "none",
                  fontSize: "17px",
                  borderRadius: 0,
                  backgroundColor: "#0E204E",
                  display: {
                    xs: "none",
                    md: "flex",
                    lg: "flex",
                   
                    width: "239px",
                    height: "62px",
                    mt:"50px"
                  }
                }}
              >
                Join Now
              </Button>
            </Box>
        </Box>
        <Box maxWidth={"50%"}
        sx={{ width: "100%", 
        display: { xs: "none", md: "flex", lg: "flex" }, 
        justifyContent:"flex-end",
        gap:"30px"
        }}>
            

          <Box
            sx={{
              maxWidth:"600px",
              width: "80%",
              height: "290px",
              bgcolor: "#0E204E",
              position: "relative",
              py: 10,
              display:{xs:"none",sm:"flex",xl:"flex",lg:"flex"},
              justifyContent:"flex-end",
              mb:"500px"
                 
                }}
              >

              
              <Image
                alt="home about"
                src={girl}
                priority={true}
                style={{
                  
                  maxWidth:"500px",
                  width: "100%",
                  height: "720px",
                  marginTop:"-300px",
                  position: "relative",
                  
                }}
              />
              </Box>
            
        </Box>
      </Container>
    </>
  )
}
export default BecomeAgent