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
          width: {sm:200,md:200,lg:200,xl:200},
          height: "450px",
          bgcolor: "#0E204E",
          position: "relative",
          py: 10,
          ml: 50,
          mt: -3,
          "@media (min-width:1440px)": {
            ml: 60,
          }
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
        ml: 20,
        display: { xs: "none", md: "flex", lg: "flex" },
        fontFamily: "Playfair Display",
        color: "#0E204E",
        textDecoration: "none",
        textWrap: "wrap",
        "@media (min-width:1440px)": {
          ml: 25,
        }
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