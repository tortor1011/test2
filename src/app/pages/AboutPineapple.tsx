'use client';

import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import road from '../../../public/image/road.jpg'
import leftslide from '../../../public/image/leftslide.jpg'
import rightslide from '../../../public/image/rightslide.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules'; 
import 'swiper/css';
import 'swiper/css/navigation'; 

export default function AboutSection() {
  return (
    <>
    <Box 
    sx={{
         display: {xs:'none',md:'flex',lg:'flex'},
         justifyContent: "center",
          mb:12 }}> 
          {/* checked */}
      {/* Left: Text title */}
      <Box>
        <Typography
          variant="h2"
          fontWeight={700}
          sx={{ 
            mt:15,
            mr:12,
            p:5,
            display: {xs:'none',md:'flex',lg:'flex'},
            fontFamily:"Playfair Display",
            color: "#0E204E",
            textDecoration: "none",
            textWrap: "wrap"
          }}
        >
          About <br /> Pineapple <br /> Island
        </Typography>
      </Box>

      {/* Middle: Image */}
      <Box sx={{ width: 720, height: 620, position: 'relative' }}>
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
              style={{ objectFit: 'cover' }}
            />
            </SwiperSlide>
        ))}
      </Swiper>
    </Box>

      {/* Right: Description box */}
      <Box sx={{
        width:"433px",
        height:"300",
        bgcolor:"#0E204E !important",
      }}
        
      >
        <Typography 
        variant="h6" 
        noWrap
        
        sx={{
          ml:0,
          mt:8,
          p:5,

          
          color: 'white',
          fontFamily:"Manrope",
          display: { xs: "none", md: "flex", lg: "flex" },
          textWrap:"wrap",
          textDecoration:"none",
        }}>
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
