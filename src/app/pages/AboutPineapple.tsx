'use client';

import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import road from '../../../public/image/road.jpg'

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
      <Box>
        <Image
          alt="home about"
            src={road}
            priority={true}
            style={{
              width: "720px",
              height: "620px",
              position: "relative",
              
            }}
          
        />
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
          ml:6,
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
