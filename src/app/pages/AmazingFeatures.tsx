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
      mb: 10,
      alignItems:"center",
      width:"100%",
      justifyContent:"center"

      
    }}
  >
    <Grid  
    sx={{
          maxWidth:"600px",
          width:"100%",
          height: "300px",
          bgcolor: "#0E204E",
          position: "relative",
          mt:"-450px"
          ,}}
>
      <Image
        alt="home about"
        src={dining}
        priority={true}
        style={{
          maxWidth: "500px",
          width:"100%",
          height: "700px",
          position: "relative",
          marginTop:"-150px"
  
        }}
      />
    </Grid>
  </Box>

  <Box maxWidth={"50%"} 
  sx={{display: { xs: "none", md: "flex", lg: "flex" },
      width:"100%",
      justifyContent:"flex-end",
      flexWrap: "wrap",
      alignContent:"flex-end",
      flexDirection:"column",
      mb:50
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
        marginLeft:{sm:"20px",md: "40px", lg: "100px",xl:"160px" }
         
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