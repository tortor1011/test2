import { Box, Button, Container, Typography, AppBar, Toolbar, Link ,Grid} from '@mui/material';
import pic1 from "../../../public/galleries/pic1.jpg"
import pic2 from "../../../public/galleries/pic2.jpg"
import pic3 from "../../../public/galleries/pic3.jpg"
import pic4 from "../../../public/galleries/Replace1.jpg"
import pic5 from "../../../public/galleries/pic5.jpg"
import pic6 from "../../../public/galleries/pic6.jpg"
import pic7 from "../../../public/galleries/Replace2.jpg"
import pic8 from "../../../public/galleries/Replace3.jpg"
import pic9 from "../../../public/galleries/Replace4.jpg"

import Image from 'next/image';
function Galleries() {
  return (
    <>
        <Box>
            <Typography
          variant="h2"
          noWrap
          component="a"
          
          fontWeight={700}
          sx={{
         
            display: { xs: "none", md: "flex", lg: "flex" },
            padding:0,
            fontFamily: "Playfair Display",
            color: "#0E204E",
            textDecoration: "none",
            textWrap: "wrap",
            justifyContent:"center"
            
          }}
        >
          Galleries
        </Typography>
        <Typography
        noWrap
        component="a"
        sx={{
          ml: 6,
          mt: 4,
          display: { xs: "none", md: "flex", lg: "flex" },
          fontFamily: "Manrope",
          color: "#0E204E",
          textDecoration: "none",
          textWrap: "stable",
          justifyContent: "center",
          fontSize:"20px"
        }}
      >
        a community that gives you a taste of happiness, a place you’ll love to
        live and
      </Typography>
      <Typography
        noWrap
        component="a"
        sx={{
          ml: 6,
          display: { xs: "none", md: "flex", lg: "flex" },
          fontFamily: "Manrope",
          color: "#0E204E",
          textDecoration: "none",
          textWrap: "stable",
          fontSize:"20px",
          justifyContent: "center"
        }}
      >
        an opportunity to build a home.
      </Typography>
      <Box sx={{display:{ xs: "none", md: "grid", lg: "grid" },gap:"30px"}}>
        <Grid  sx={{display: {xs:"none", sm: "none", md: "flex", lg: "flex",xl:"flex" ,gap:"30px"},justifyContent: "center",mt: 4}}>

            <Grid size={3} sx={{display: { xs: "none", md: "flex", lg: "flex" }}}>
                <Image alt='pic1' src={pic1} priority={true} style={{maxWidth:"469px",width:"100%",maxHeight:"469px",height:"100%"}} />
            </Grid>
            <Grid size={3} sx={{ display: { xs: "none", md: "flex", lg: "flex" } }}>
                <Image alt='pic2' src={pic2} priority={true} style={{maxWidth:"469px",width:"100%",maxHeight:"469px",height:"100%"}}/>
            </Grid>
            <Grid size={3} sx={{ display: { xs: "none", md: "flex", lg: "flex" } }}>
                <Image alt='pic3' src={pic3} priority={true} style={{maxWidth:"469px",width:"100%",maxHeight:"469px",height:"100%"}}/>
            </Grid>

        </Grid>

        <Grid  sx={{display: { sm: "none", md: "flex", lg: "flex", },justifyContent: "center",gap:"30px"}}>

            <Grid size={3} sx={{display: { xs: "none", md: "flex", lg: "flex" }}}>
                <Image alt='pic4' src={pic4} priority={true} style={{maxWidth:"469px",width:"100%",maxHeight:"469px",height:"100%"}} />
            </Grid>
            <Grid size={3} sx={{ display: { xs: "none", md: "flex", lg: "flex" } }}>
                <Image alt='pic5' src={pic5} priority={true} style={{maxWidth:"469px",width:"100%",maxHeight:"469px",height:"100%"}}/>
            </Grid>
            <Grid size={3} sx={{ display: { xs: "none", md: "flex", lg: "flex" } }}>
                <Image alt='pic6' src={pic6} priority={true} style={{maxWidth:"469px",width:"100%",maxHeight:"469px",height:"100%"}}/>
            </Grid>

        </Grid>

        <Grid  sx={{display: { sm: "none", md: "flex", lg: "flex",},justifyContent: "center" ,mb:55,gap:"30px"}}>

            <Grid size={4} sx={{display: { xs: "none", md: "flex", lg: "flex" }}}>
                <Image alt='pic7' src={pic7} priority={true} style={{maxWidth:"469px",width:"100%",maxHeight:"469px",height:"100%"}} />
            </Grid>
            <Grid size={4} sx={{ display: { xs: "none", md: "flex", lg: "flex" } }}>
                <Image alt='pic8' src={pic8} priority={true} style={{maxWidth:"469px",width:"100%",maxHeight:"469px",height:"100%"}}/>
            </Grid>
            <Grid size={4} sx={{ display: { xs: "none", md: "flex", lg: "flex" } }}>
                <Image alt='pic9' src={pic9} priority={true} style={{maxWidth:"469px",width:"100%",maxHeight:"469px",height:"100%"}}/>
            </Grid>

        </Grid>
        </Box>
      </Box>
    </>
  )
}
export default Galleries