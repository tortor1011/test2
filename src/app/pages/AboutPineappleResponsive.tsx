'use client';

import { Box, Typography, Grid } from '@mui/material';
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
          mb:4
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
          
          mb:4,
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
            mb:10,
            p:5,
            display: {xs:'none',md:'flex',lg:'flex'},
            fontFamily:"Playfair Display",
            color: "#0E204E",
            textDecoration: "none",
            textWrap: "wrap"
          }}
        >
          What Pineapple Land Offers
        </Typography>
      </Box>
    </Box> 
    {/* end of text */}
    <Box
        sx={{
          display: { xs: "none", md: "flex", lg: "flex" },
          ml: 10
        }}
      >
        <Grid
          sx={{
            display: { sm: "none", md: "flex", lg: "flex" },
            mb: 10
          }}
        >
          <Grid
            size={6}
            sx={{
              display: { sm: "none", md: "flex", lg: "flex" },
              m: 10
            }}
          >
            
              <Box
                sx={{
                  width: "250px",
                  height: "290px",
                  bgcolor: "#0E204E",
                  position: "relative",
                  py: 10,
                  ml: 50,
                  
                }}
              >
              <Image
                alt="home about"
                src={Garden}
                priority={true}
                
                style={{
                  margin: 50,
                  width: "560px",
                  height: "582px",
                  marginLeft:"-500px",
                  marginTop: "-200px",
                  position: "absolute",
                  
                  
                }}
              />
              </Box>
              
            
          </Grid>
          <Grid
            size={6}
            sx={{
              justifyContent: "end",
              alignContent: "center"
            }}
          >
            <LogoFirstrow />
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          display: { xs: "none", md: "flex", lg: "flex" },
          ml: 25,
          mt: 20
        }}
      >
        <Grid
          sx={{
            display: { sm: "none", md: "flex", lg: "flex" },
            mb: 50
          }}
        >
          <Grid
            size={6}
            sx={{
              justifyContent: "end",
              alignContent: "center"
            }}
          >
            <LogoSecondRow />
          </Grid>
          <Grid
            size={6}
            sx={{
              display: { sm: "none", md: "flex", lg: "flex" },
              py: 0,
              ml: 15
            }}
          >
            <Box>
              <Box
                sx={{
                  width: "600px",
                  height: "300px",
                  bgcolor: "#0E204E",
                  py: 10,
                  position: "relative",
                  mt: 2,
                  ml:{md:0,lg:0,xl:50}
                }}
              >
              <Image
                alt="home about"
                src={Garden2}
                priority={true}
                
                style={{
                  margin: 50,
                  
                  width: "568px",
                  height: "582px",
                  marginTop: "-200px",
                  position: "absolute",
                  paddingLeft:"50px"
                }}
              />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
