import { Box, Button, Container, Typography, AppBar, Toolbar, Link,Grid } from '@mui/material';
import Image from 'next/image';
import dining from "../../../public/image/diningroom.jpg"
import Table from "./table"
function AmazingFeatures() {
  return (
    <>
    <Box
  sx={{
    display: { xs: "none", md: "flex", lg: "flex" },
    ml: 15,
    mb: 20,
    "@media (min-width:1440px)": {
      ml: { xs: 10, md: 10, lg: 10 }
    }
  }}
>
  <Grid
    sx={{
      display: { sm: "none", md: "flex", lg: "flex" },
      mb: 10,
      "@media (min-width:1440px)": {
        mb: 12,
      }
    }}
  >
    <Box>
      <Box
        sx={{
          width: {sm:200,md:300,lg:500,xl:200},
          height: "450px",
          bgcolor: "#0E204E",
          position: "relative",
          py: 0,
          ml: {sm:0,md:2,lg:5,xl:50},
          mt: -3,
          mr:{md:20,lg:20,xl:40}
        }}
      />
      <Image
        alt="home about"
        src={dining}
        priority={true}
        style={{
          margin: 50,
          marginLeft: 5,
          width: "500px",
          height: "700px",
          marginTop: "-550px",
          position: "absolute",
  
        }}
      />
    </Box>
  </Grid>

  <Grid>
    <Typography
      variant="h2"
      fontWeight={700}
      sx={{
        marginTop: "-150px",
        
        display: { xs: "none", md: "flex", lg: "flex" },
        fontFamily: "Playfair Display",
        color: "#0E204E",
        textDecoration: "none",
        textWrap: "nowrap",
        
        ml: { xs: "none", md: 6, lg: 10,xl: 22 },
        
      }}
    >
      Amazing Features
    </Typography>
    <Table />
  </Grid>
</Box>

    </>
  )
}
export default AmazingFeatures