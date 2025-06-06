"use client"
import { Box, Button, Container, Typography, AppBar, Toolbar, Link, Grid, ThemeProvider } from '@mui/material'
import Image from 'next/image'
import girl from "../../../public/image/ReplaceGirl.jpg"
import theme from '../styles/theme'
function BecomeAgent() {
  return (
    <>
      <Container maxWidth={false}
        sx={{
          display: { xs: "none", md: "flex", lg: "flex" },
          height:"1200px",
          alignItems: "center",
        }}
      >
        <Box maxWidth={"50%"}
          sx={{
            width: "100%",
            display: { xs: "none", md: "flex", lg: "flex" },
            justifyContent: "center",
            height: "100%",
            gap: "30px",
            alignItems: "center"

          }}>
          <Box
            sx={{
              width: "552px",
              height: "200px",
              position: "relative",
              gap: "30px"
            }}
          >
            <ThemeProvider theme={theme} >
              <Typography
                variant="h2"
                noWrap
                component="a"
                fontWeight={700}
                sx={{
                  display: { xs: "none", md: "flex", lg: "flex" },
                  fontFamily: "Playfair Display",
                  color: "#0E204E",
                  textDecoration: "none",
                  textWrap: "wrap",
                  mr: 2
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
                display: { xs: "none", md: "flex", lg: "flex" },
                fontFamily: "Manrope",
                color: "#0E204E",
                textDecoration: "none",
                textWrap: "pretty",
                fontSize: "20px"
              }}
            >
              a community that gives you a taste of <br /> happiness, a place
              you’ll love to live and an
              <br /> opportunity to build a home.
            </Typography>
            <Box sx={{ display: { xs: "none", md: "flex", lg: "flex" } }}>
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
                  }
                }}
              >
                Join Now
              </Button>
            </Box>
          </Box>
        </Box>
        <Box maxWidth={"50%"}
          sx={{
            width: "100%",
            display: { xs: "none", md: "flex", lg: "flex" },
            justifyContent: "center",
            gap: "30px"
          }}>
          <Box >
            <Image
              alt="home about"
              src={girl}
              priority={true}
              style={{
                maxWidth: "500px",
                width: "100%",
                height: "720px",
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
