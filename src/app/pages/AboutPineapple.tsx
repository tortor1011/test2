'use client';

import { Box, Typography } from '@mui/material';
import Image from 'next/image';

export default function AboutSection() {
  return (
    <Box sx={{
         display: {xs:'none',md:'flex',lg:'flex'},
         justifyContent: "center",
          alignItems: 'center', 
          height: '90vh',
        p: 10 }}>
      {/* Left: Text title */}
      <Box>
        <Typography
          variant="h2"
          fontWeight={700}
          color="#0a1c48"
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
      <Box
        sx={{
          position: 'relative',
          width: 500,
          height: 350,
          border: '2px solid #d4a4f5', 
          mx: 3,
        }}
      >
        <Image
          src="/road.jpg" // ⬅️ รูปนี้ควรอยู่ใน public/pineapple-home.jpg
          alt="Pineapple Island"
          fill
          style={{ objectFit: 'cover' }}
        />
      </Box>

      {/* Right: Description box */}
      <Box
        sx={{
          flex: 1,
          backgroundColor: '#0a1c48',
          color: 'white',
          padding: 4,
          height: '100%',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Typography variant="body1" lineHeight={1.8}>
          Pineapple Island is the most sought-after community in Ibadan that
          values and puts the needs of their clients first. It is a territory
          with loft complexes that creates a country life and homely feeling
          that is integrated with industrial development. A perfect,
          professional built abode that gives you the true taste of beauty and
          happiness.
        </Typography>
      </Box>
    </Box>
  );
}
