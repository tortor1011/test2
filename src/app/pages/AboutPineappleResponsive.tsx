'use client';

import { Box, Typography, Grid, Container } from '@mui/material';
import Image from 'next/image';
import road from '../../../public/image/road.jpg'
import leftslide from '../../../public/image/leftslide.jpg'
import rightslide from '../../../public/image/rightslide.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import LogoFirstrow from "../styles/LogoFirstrow"
import Garden from "../../../public/image/garden.jpg"
import Garden2 from "../../../public/image/garden2.jpg"
import LogoSecondRow from '../styles/LogoSecondRow';
import homeresponsive from '../../../public/imageforresponsive/homeres.png'
import { dark } from '@mui/material/styles/createPalette';

export default function AboutSection() {
  return (
    <>
      <Box
        sx={{
          display: { xs: "flex", md: "none", lg: "none" },
          justifyContent: "center",
          mt: 30,
          mb: 4
        }}
      >
        <Typography
          variant="h4"
          fontWeight={700}
          sx={{
            fontFamily: "Playfair Display",
            position: "absolute",

            textWrap: "wrap",
            color: "#0E204E",
            textDecoration: "none",
            textAlign: "center"
          }}
        >
          About <br /> Pineapple Island
        </Typography>

      </Box>
      <Box
        sx={{
          display: { xs: "flex", md: "none", lg: "none" },
          justifyContent: "center",

          mb: 4,
        }}
      >
        <Image
          alt="home about"
          src={homeresponsive}
          priority={true}
          style={{
            marginTop: "100px",
            paddingLeft: "40px",
            paddingRight: "40px",
            width: "100%",
            height: "80%",
            filter: "brightness(0.60)"
          }}
        />
        <Typography

          sx={{
            fontFamily: "Lato",
            mt: 17,
            position: "absolute",
            ml: 12,
            pr: 10,
            textWrap: "pretty",
            color: "white",
            textDecoration: "none",
            textAlign: "center"
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
      {/* box นี้ข้อความเฉยๆ */}
      <Box
        sx={{
          display: { xs: 'none', md: 'flex', lg: 'flex' },
          justifyContent: "center",
          mb: 12
        }}>
        {/* checked */}
        {/* Left: Text title */}
        <Box>
          <Typography
            variant="h2"
            fontWeight={700}
            sx={{
              mt: 15,
              mb: 10,
              p: 5,
              display: { xs: 'none', md: 'flex', lg: 'flex' },
              fontFamily: "Playfair Display",
              color: "#0E204E",
              textDecoration: "none",
              textWrap: "wrap"
            }}
          >
            What Pineapple Land Offers
          </Typography>
        </Box>
      </Box>
      {/* boxบน */}
      <Container maxWidth={false}>
        <Container maxWidth={false}
          sx={{
            display: { xs: "none", md: "flex", lg: "flex" },
            maxWidth: "100%",
            // height:"300px",
            pl: 5


          }}
        >
          <Box sx={{
            display: { xs: "none", md: "flex", lg: "flex" },
            width: '50%',
            height: '100%',
            alignItems: "center"
          }}>
  
              <Image
                alt="home about"
                src={Garden}
                priority={true}

                style={{
                  // maxWidth: "567px",
                  width: "70%",
                  height: 'auto',
                  // height: "582px",
                  // marginTop: "-200px",
                  position: "relative",
                  justifyItems: "center",
                  aspectRatio: "1/1"
                }}
              />
              <Box sx={{
                maxWidth: "800px",
                width: "100%",
                height: "800px",
                bgcolor: "#0E204E",
                position: "relative",
                maxHeight:"250px",
                display: { xs: "none", md: "flex", lg: "flex" }
              }}>

            </Box>

          </Box>


          <Grid

            sx={{
              display: { xs: "none", md: "flex", lg: "flex" },
              justifyContent: "center",
              alignContent: "center",
              width: '50%',
              alignItems: "center"
            }}
          >
            <LogoFirstrow />
          </Grid>
        </Container>













        {/* box นี้ box ล่างไม่เกี่ยวไรกับข้างบน */}
        <Container maxWidth={false}
          sx={{
            display: { xs: "none", md: "flex", lg: "flex" },
            maxWidth: "100%",
            height:"100%",
            pl: 5


          }}
        >
          <Box sx={{
           display:{ xs: "none", md: "flex", lg: "flex" },
           width: '50%', 
           height: 'auto',
           alignItems:"center"
            }}>
            
            <LogoSecondRow/>
            
          </Box>

          <Box sx={{
           display:{ xs: "none", md: "flex", lg: "flex" },
           width: '50%', 
           height: '100%',
           alignItems:"center"
            }}>
            
            <Box sx={{
                maxWidth: "800px",
                width: "100%",
                height: "250px",
                bgcolor: "#0E204E",
                position: "relative",
        
                display: { xs: "none", md: "flex", lg: "flex" }
              }}>

            </Box>
            
              <Image
                alt="home about"
                src={Garden}
                priority={true}

                style={{
                  // maxWidth: "567px",
                  width: "70%",
                  height: '100%',
                  // height: "582px",
                  // marginTop: "-200px",
                  position: "relative",
                  justifyItems: "center",
                  aspectRatio: "1/1"
                }}
              />
          </Box>


          
        </Container>
      </Container>

    </>
  );
}
