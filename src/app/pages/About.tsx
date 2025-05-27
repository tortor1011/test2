'use client';
import { Box, Button, Container, Typography, AppBar, Toolbar, Link } from '@mui/material';
import Image from 'next/image';
import Head from 'next/head';
import house from '../../../public/image/house.jpg'


import road from '../../../public/image/road.jpg'
import leftslide from '../../../public/image/leftslide.jpg'
import rightslide from '../../../public/image/rightslide.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules'; 
import 'swiper/css';
import 'swiper/css/navigation'; 
import homeres from "../../../public/imageforresponsive/homecrop.png"

export default function About() {
  return (
    <>
      
      <Box
        sx={{
          display: { xs: "flex", md: "none", lg: "none" }
        }}
      >
        <Image
          alt="home about"
          src={homeres}
          priority={true}
          style={{
            paddingLeft: "40px",
            paddingRight: "40px",
            position: "relative",
            width: "100%",
            height: "600px",
            filter: "brightness(0.60)"
          }}
        />
      </Box>
      <Box
        sx={{
          display: { xs: "flex", md: "none", lg: "none" },
          justifyContent: "center",
          mt: -55
        }}
      >
        <Typography
          variant="h5"
          
          fontWeight={700}
          sx={{
            fontFamily: "Playfair Display",
            position: "absolute",
            fontWeight: 700,
            textWrap: "wrap",
            color: "white",
            textDecoration: "none"
          }}
        >
          Pineapple Island:
        </Typography>
        <Typography
          variant="h5"
          
          fontWeight={700}
          sx={{
            fontFamily: "Playfair Display",
            mt: 4,
            position: "absolute",
            fontWeight: 700,
            textWrap: "wrap",
            color: "white",
            textDecoration: "none"
          }}
        >
          GenZ and Millenial Abode
        </Typography>

        <Typography
          
          sx={{
            fontFamily: "Manrope",
            mt: 10,
            position: "absolute",
            ml: 6,
            pr: 5,
            textWrap: "pretty",
            color: "white",
            textDecoration: "none",

            textAlign: "center"
          }}
        >
          a community that gives you a taste of happiness, a place you’ll love
          to live and an opportunity to build a home.
        </Typography>
        <Button
          variant="contained"
          sx={{
            fontFamily: "Manrope",
            textTransform: "none",
            color: "black",
            bgcolor: "white",
            mt: 25
          }}
        >
          Get in Touch
        </Button>
      </Box>

       <Box 
  sx={{
    display: { xs: 'none', md: 'flex', lg: 'flex' },
    justifyContent: "center",
    mb: 12,
    px: { md: 2, lg: 4, xl: 6 }, // Add padding for larger screens
  }}
> 
  {/* Left: Text title */}
  <Box>
    <Typography
      variant="h2"
      fontWeight={700}
      sx={{ 
        mt: 15,
        mr: { md: 8, lg: 12, xl: 16 }, // Responsive margin for larger screens
        p: 5,
        display: { xs: 'none', md: 'flex', lg: 'flex' },
        fontFamily: "Playfair Display",
        color: "#0E204E",
        textDecoration: "none",
        textWrap: "wrap",
        fontSize: { md: '2.5rem', lg: '3rem', xl: '3.5rem' }, // Scale for Retina
        lineHeight: '1.2', // Improve text rendering
      }}
    >
      About <br /> Pineapple <br /> Island
    </Typography>
  </Box>

  {/* Middle: Image */}
  <Box sx={{ 
    width: { md: 600, lg: 720, xl: 800 }, // Responsive width
    height: { md: 500, lg: 620, xl: 700 }, // Responsive height
    position: 'relative',
  }}>
    <Swiper
      modules={[Navigation]}
      navigation
      spaceBetween={20}
      slidesPerView={1}
      loop={true}
    >
      {[road, rightslide, leftslide].map((imgSrc, index) => (
        <SwiperSlide key={index}>
          <Image
            alt={`slide-${index}`}
            src={imgSrc}
            priority
            width={720}
            height={620}
            style={{ 
              objectFit: 'cover',
              width: '100%',
              height: '100%',
            }}
            quality={100} // Optimize for Retina
            sizes="(max-width: 800px) 100vw, 720px" // Optimize for different screen sizes
          />
        </SwiperSlide>
      ))}
    </Swiper>
  </Box>

  {/* Right: Description box */}
  <Box sx={{
    width: { md: '400px', lg: '433px', xl: '480px' }, // Responsive width
    height: { md: '398px', lg: '476px', xl: '529px' }, // Responsive height
    bgcolor: "#0E204E !important",
  }}>
    <Typography 
      variant="h6" 
      noWrap
      sx={{
        ml: 0,
        mt: 8,
        p: 5,
        color: 'white',
        fontFamily: "Manrope",
        display: { xs: "none", md: "flex", lg: "flex" },
        textWrap: "wrap",
        textDecoration: "none",
        fontSize: { md: 16, lg: 18, xl: 20 }, // Scale for Retina
        lineHeight: '1.5', // Better text rendering
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
      
      
    
        
    

    </>
  );
}
