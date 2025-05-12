
'use client';

import { Box, Typography, useTheme } from '@mui/material';
import Image from 'next/image';

const HeroSection = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: 'relative',
        height:'100%',
        width: '100%',
        minHeight: { xs: 500, md: 600 },
        mt: { xs: 5, md: 5 }, 
        overflow: 'hidden',
      }}
    >
      {/* Background Image */}
      <Image
        src="/house.jpg" 
        alt="Pineapple Island House"
        width={720} 
        height={1080} 
        layout="responsive" 
        objectFit="cover" 
        priority
      />

      {/* Overlay Box */}
      <Box
        sx={{
          position: 'absolute',
          top: { xs: 50, md: 100 },
          left: { xs: 20, md: 80 },
          backgroundColor: '#0A1F5B',
          color: 'white',
          padding: { xs: 3, md: 5 },
          maxWidth: { xs: '75%', md: '40%' },
        }}
      >
        <Typography variant="h4" fontWeight="bold" gutterBottom sx={{ lineHeight: 1.3 }}>
          Pineapple Island:<br />
          GenZ and Millenial Abode
        </Typography>
        <Typography variant="body1">
          a community that gives you a taste of happiness, a place you'll love to live and an opportunity to build a home.
        </Typography>
      </Box>
    </Box>
  );
};

export default HeroSection;