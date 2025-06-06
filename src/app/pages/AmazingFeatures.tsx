import { Box, Button, Container, Typography, AppBar, Toolbar, Link,Grid } from '@mui/material';
import Image from 'next/image';
import dining from "../../../public/image/diningroom.jpg"
import Table from "./table"
import { wrap } from 'module';
function AmazingFeatures() {
  return (
    <>
    <Container maxWidth={false}
        sx={{display: { xs: "none", md: "flex", lg: "flex" },
      flexdirection: "column"}}>

  <Box maxWidth={"50%"} 
    sx={{
      display: { sm: "none", md: "flex", lg: "flex" },
      alignItems:"center",
      width:"100%",
      justifyContent:"center"
    }}
  >
    <Grid sx={{ display: { xs: "none", md: "flex", lg: "flex" },
    width:"70%",
               alignItems:"center" }}>
      <Image
        alt="home about"
        src={dining}
        priority={true}
        style={{
          maxWidth: "100%",
          width:"90%",
          height: "700px",
          position: "relative",      
          objectFit: "cover"
        }}
      />
      <Box sx={{maxWidth: "800px",
                width: "100%",
                height: "300px",
                bgcolor: "#0E204E",
                position: "relative",
                display: { xs: "none", md: "flex", lg: "flex" }}}
      />
    </Grid>
  </Box>

  <Box maxWidth={"50%"} 
  sx={{display: { xs: "none", md: "flex", lg: "flex" },
      width:"100%",
      flexWrap: "wrap",
      flexDirection:"column",
      justifyContent:"center",
      alignItems:"center"
      }}>
    <Typography
      variant="h2"
      fontWeight={700}
      sx={{
        
        display: { xs: "none", md: "flex", lg: "flex" },
        fontFamily: "Playfair Display",
        color: "#0E204E",
        textDecoration: "none",
        textWrap: "nowrap",
      }}
    >
      Amazing Features
    </Typography>
    <Table />
  </Box>
</Container>
    </>
  )
}
export default AmazingFeatures
