"use client"
import { Box, Button, Container, Typography, AppBar, Toolbar, Link, ThemeProvider } from '@mui/material'
import Image from 'next/image'
import crophome from '../../../public/image/Crophome.jpg'
import theme from '../styles/theme'
function WhyMustPPAP() {
  return (
    <>
      <Box sx={{ position: "relative" }}>
        <Container maxWidth={false} sx={{ p: "0px !important" }}>
          <Box sx={{
        display: { xs: "none", md: "flex", lg: "flex" },
        maxWidth: "1920px",
        width: "100%",
        zIndex: "-1",
        height: "708px",
        bgcolor: "#0E204E",
        position: "relative",
        clipPath: "polygon(50% 0%, 100% 0, 100% 100%, 84% 93%, 60% 80%, 0 100%, 0 0)"
          }}>
        <Box sx={{
          display: { xs: "none", md: "flex", lg: "flex" },
          width: "30%",
          justifyContent: "center"
        }}>
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
            textWrap: "wrap",
            alignItems: "center"
          }}
            >
          Why<br /> Choose<br /> Pineapple <br />
          Island
            </Typography>
          </ThemeProvider>
        </Box>
          </Box>
        </Container>
        <Box
          sx={{
        zIndex: 2,
        position: "absolute",
        top: "60%",
        left: "55%",
        transform: "translate(-50%, -50%)",
        boxShadow: 2,
        maxWidth: "60%",
        maxHeight: "634px",
        bgcolor: "white",
        display: { xs: "none", md: "flex", lg: "flex" },
        alignItems: "center",
        wordBreak: "break-word",
        overflowWrap: "break-word",
        width: "100%",
        whiteSpace: "pre-line",
          }}
        >
          <Typography
        variant="h6"
        noWrap
        component="a"
        sx={{
          maxHeight: "634px",
          px: "40px",
          fontFamily: "Manrope",
          color: "#0E204E",
          textDecoration: "none",
          textWrap: "wrap",
          wordBreak: "break-word",
          overflowWrap: "break-word",
          maxWidth: "100%",
          whiteSpace: "pre-line",
        }}>
        Pineapple Island is the most sought-after community in Ibadan that
        values and puts the needs of their clients first. It is a
        territory with loft complexes that creates a country life and
        homely feeling that is integrated with industrial development. A
        perfect, professional built abode that gives you the true taste of
        beauty and happiness.
          </Typography>
          <Image
        alt="home about"
        src={crophome}
        priority={true}
        style={{
          maxWidth: "709px",
          width: "100%",
          height: "634px",
          objectFit: "cover"
        }}
          />
        </Box>
      </Box>
    </>
  )
}
export default WhyMustPPAP
