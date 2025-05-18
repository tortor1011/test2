import { Box, Button, Container, Typography, AppBar, Toolbar, Link,Grid } from '@mui/material';
import Image from 'next/image';
import LogoFirstrow from "../styles/LogoFirstrow"
import Gardenresponsive from "../../../public/image/gardenresponsive.png"
import Garden2 from "../../../public/image/garden2.jpg"
import LogoSecondRow from '../styles/LogoSecondRow';
import Framelogoresponsive from '../styles/Framelogoresponsive';
import dining from "../../../public/imageforresponsive/livingroom.png"
import Table from "./table"
const WhatPPAP = () => {
  return (
    <>
 <Box
        sx={{
          display: { xs: "flex", md: "none", lg: "none" },
          justifyContent: "center",
          mt: 5
        }}
      >
        <Box>
          <Typography
            variant="h4"
            fontWeight={700}
            sx={{
              fontFamily: "Playfair Display",
              textWrap: "wrap",
              color: "#0E204E",
              textDecoration: "none",
              letterSpacing: 2,
              textAlign: "center"
            }}
          >
            Why Choose <br /> Pineapple Island
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: { xs: "flex", md: "none", lg: "none" },
          justifyContent: "center",
          mt: 5
        }}
      >
        <Box>
          <Typography
            sx={{
              fontFamily: "Lato",
              ml: 6,
              pr: 6,
              textWrap: "wrap",
              color: "#0E204E",
              textDecoration: "none",
              textAlign: "center",
              pb: 3
            }}
          >
            Pineapple Island is the most sought-after community in Ibadan that
            values and puts the needs of their clients first. It is a territory
            with loft complexes that creates a country life and homely feeling
            that is integrated with industrial development. A perfect,
            professional built abode that gives you the true taste of beauty and
            happiness.
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: { xs: "flex", md: "none", lg: "none" },
          justifyContent: "center",
          
        }}
      >
        <Box sx={{ width: "100%", maxWidth: 334, mx: "auto" }}>
          <Image
            alt="home about"
            src={dining}
            priority={true}
            style={{
              width: "100%",

            }}
          />
        </Box>
      </Box>
      <Box
        sx={{
          display: { xs: "flex", md: "none", lg: "none" },
          justifyContent: "center",
          mt: 5
        }}
      >
        <Box sx={{}}>
          <Typography
            variant="h4"
            fontWeight={700}
            sx={{
              fontFamily: "Playfair Display",
              textWrap: "wrap",
              color: "#0E204E",
              textDecoration: "none",
              textAlign: "center",
              mb: 4
            }}
          >
            Pineapple Island Offers
          </Typography>
          <Image
            alt="home about"
            src={Gardenresponsive}
            priority={true}
            style={{
              width: "100%",
              height: "387px"
            }}
          />

          <Box
            sx={{
              display: { xs: "flex", md: "none", lg: "none" },
              justifyContent: "center",
              mt: -4,
              mb: 4
            }}
          >
            <Box
              bgcolor="#0E204E"
              sx={{
                width: "320px",
                height: "247px"
              }}
            >
              <Framelogoresponsive />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  )
}
export default WhatPPAP