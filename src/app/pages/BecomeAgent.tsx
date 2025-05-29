"use client"
import { Box, Button, Container, Typography, AppBar, Toolbar, Link,Grid, ThemeProvider } from '@mui/material';
import Image from 'next/image';
import girl from "../../../public/image/ReplaceGirl.jpg"
import theme from '../styles/theme';
function BecomeAgent() {
  return (
    <>
    <Box
        sx={{
          display: { xs: "none", md: "flex", lg: "flex" },
          ml: { xs: "none", md: 0, lg: 8,xl:12 },
          mb: 30
        }}
      >

        <Grid>
            <Box
              sx={{
                mt: { xs: 0, md: 33, lg: 33,xl:35 },
                ml: 23,
                mr: { xs: 0, md: 10, lg: 30,xl:30 },
                mb: 40,
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
                  justifyContent: "center"
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
                  mt: 4,
                  display: {
                    xs: "none",
                    md: "flex",
                    lg: "flex",
                   
                    width: "239px",
                    height: "62px"
                  }
                }}
              >
                Join Now
              </Button>
            </Box>
        </Grid>
        <Grid>
            <Box>

              <Box
                sx={{
                  
                  maxWidth:"200px",
                  width: "100%",
                  height: "320px",
                  bgcolor: "#0E204E",
                  py: 10,
                  mt: 39,
                  ml: 10,
                  pl: 10,
                                
                 
                }}
              ></Box>
              <Image
                alt="home about"
                src={girl}
                priority={true}
                style={{
                  margin: 50,
                  
                  maxWidth:"552px",
                  width: "100%",
                  height: "auto",
                  marginTop: "-500px",
                  position: "relative",
                  padding:"60px"
                }}
              />
              
            </Box>
        </Grid>
        
        {/* <Grid
          sx={{
            display: { sm: "none", md: "flex", lg: "flex" },
            mb: 10
          }}
        >
          <Grid
            size={6}
            sx={{
              justifyContent: "end",
              alignContent: "center"
            }}
          >
            <Box
              sx={{
                ml: 20,
                width: "512px",
                height: "258px",
                position: "relative",
              }}
            >
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
              <Typography
                noWrap
                component="a"
                sx={{
                  fontFamily: "Manrope",
                  color: "#0E204E",
                  textDecoration: "none",
                  textWrap: "pretty",
                  justifyContent: "center"
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
                  mt: 4,
                  display: {
                    xs: "none",
                    md: "flex",
                    lg: "flex",
                   
                    width: "239px",
                    height: "62px"
                  }
                }}
              >
                Join Now
              </Button>
            </Box>
          </Grid>
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
                  
                  width: "412px",
                  height: "358px",
                  bgcolor: "#0E204E",
                  py: 10,
                  mt: 20,
                 
                }}
              ></Box>
              <Image
                alt="home about"
                src={girl}
                priority={true}
                style={{
                  margin: 50,
                  marginLeft: "200px",
                  width: "552px",
                  height: "725px",
                  marginTop: "-500px",
                  position: "absolute"
                }}
              />
            </Box>
          </Grid>
        </Grid> */}
      </Box>
    </>
  )
}
export default BecomeAgent