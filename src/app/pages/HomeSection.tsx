'use client';
import { Box, Button, Container, Typography, AppBar, Toolbar, Link } from '@mui/material';
import Image from 'next/image';
import Head from 'next/head';
import house from '../../../public/image/house.jpg';
import road from '../../../public/image/road.jpg';
import leftslide from '../../../public/image/leftslide.jpg';
import rightslide from '../../../public/image/rightslide.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules'; 
import 'swiper/css';
import 'swiper/css/navigation'; 
import homeres from '../../../public/imageforresponsive/homecrop.png';

export default function Home() {
  return (
    <>
      <Box
        sx={{
          display: { xs: 'none', md: 'flex', lg: 'flex',xl:"flex" },
          justifyContent: "flex-end",
          mb: 12,
          position:"relative"
          
        }}
      >
        <Image
          src={house}     
          alt="Modern House"
          width={1368}        
          height={717}        
          style={{ 
            position: 'relative', 
            clipPath: 'polygon(100% 0, 100% 100%, 79% 83%, 0 100%, 0 0)', 
            maxWidth: '1368px', 
            maxHeight:"717px",
            width: '100%',
            height: '100%',
            
          }}
          priority={true}
          quality={100} 
        
        />
        <Box
          sx={{
            maxWidth:"786px",
            width: "100%",
            height: "auto",
            bgcolor: '#0E204E',
            py: { xs: 3, md: 10 },
            position: { xs: 'relative', md: 'absolute' },
            ml: { xs: 2, md: '20px' }, 
            mt: { xs: 5, md: 20 },
            mr: { xs: 2, md: 'calc(70vw - 350px)' }, 
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Typography
            variant="h2"
            noWrap
            fontWeight={700}
            sx={{
              mr: { xs: 'none', md: 20, lg: 13,xl:2 },
              display: { xs: 'none', md: 'flex', lg: 'flex' },
              fontFamily: 'Playfair Display',
              fontWeight: 700,
              color: 'white',
              textDecoration: 'none',
              justifyContent: 'flex-start',
              alignContent: 'center',
              letterSpacing: 2,
              fontSize: "64px", 
              lineHeight: '1.25', 
              marginLeft:"52px"
            }}
          >
            Pineapple Island: <br /> GenZ and Millenial <br /> Abode
          </Typography>
          <Typography
            noWrap
            sx={{
              fontSize:"20px" ,
              ml: 4,
              mt: 2,
              display: { xs: 'none', md: 'flex', lg: 'flex' },
              fontFamily: 'manrope',
              color: 'white',
              textDecoration: 'none',
              justifyContent: 'center',
              lineHeight: '1.5', 
            }}
          >
            a community that gives you a taste of happiness,<br /> a place you’ll love
            to 
            live and an opportunity to build a home.
          </Typography>
        </Box>
      </Box>
    </>
  );
}