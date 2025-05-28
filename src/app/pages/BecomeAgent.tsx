import { Box, Button, Container, Typography, AppBar, Toolbar, Link,Grid } from '@mui/material';
import Image from 'next/image';
import girl from "../../../public/image/girl.jpg"

function BecomeAgent() {
  return (
    <>
    <Box
        sx={{
          display: { xs: "none", md: "flex", lg: "flex" },
          ml: 12,
          mb: 30
        }}
      >

        <Grid>
            <Box
              sx={{
                mt: 40,
                ml: 23,
                mr: { xs: 0, md: 0, lg: 0,xl:50 },
                mb: 40,
                width: "552px",
                height: "200px",
                position: "relative",
              }}
            >
              <Typography
                variant="h2"
                noWrap
                component="a"
                fontWeight={700}
                sx={{
                  mb: 3,
                  display: { xs: "none", md: "flex", lg: "flex" },
                  fontFamily: "Playfair Display",
                  color: "#0E204E",
                  textDecoration: "none",
                  textWrap: "wrap"
                }}
              >
                Become an
                <br /> Agent
              </Typography>
              <Typography
                noWrap
                component="a"
                sx={{
                  fontFamily: "Manrope",
                  color: "#0E204E",
                  textDecoration: "none",
                  textWrap: "pretty",
                  justifyContent: "center"
                }}
              >
                a community that gives you a taste of <br /> happiness, a place
                you’ll love to live and an
                <br /> opportunity to build a home.
              </Typography>
              <Button
                variant="contained"
                sx={{
                  fontFamily: "Manrope",
                  textTransform: "none",
                  fontSize: "17px",
                  borderRadius: 0,
                  backgroundColor: "#0E204E",
                  mt: 4,
                  display: {
                    xs: "none",
                    md: "flex",
                    lg: "flex",
                   
                    width: "239px",
                    height: "62px"
                  }
                }}
              >
                Join Now
              </Button>
            </Box>
        </Grid>
        <Grid>
            <Box>

              <Box
                sx={{
                  
                  width: "412px",
                  height: "400px",
                  bgcolor: "#0E204E",
                  py: 10,
                  mt: 39,
                  ml: 2,
                  pl: 10
                  
                 
                }}
              >
              <Image
                alt="home about"
                src={girl}
                priority={true}
                style={{
                  margin: 50,
              
                  width: "500px",
                  height: "725px",
                  marginTop: "-250px",
                  position: "relative",
                }}
              />
              </Box>
            </Box>
        </Grid>
        
        {/* <Grid
          sx={{
            display: { sm: "none", md: "flex", lg: "flex" },
            mb: 10
          }}
        >
          <Grid
            size={6}
            sx={{
              justifyContent: "end",
              alignContent: "center"
            }}
          >
            <Box
              sx={{
                ml: 20,
                width: "512px",
                height: "258px",
                position: "relative",
              }}
            >
              <Typography
                variant="h2"
                noWrap
                component="a"
                fontWeight={700}
                sx={{
                  mb: 3,
                  display: { xs: "none", md: "flex", lg: "flex" },
                  fontFamily: "Playfair Display",
                  color: "#0E204E",
                  textDecoration: "none",
                  textWrap: "wrap"
                }}
              >
                Become an
                <br /> Agent
              </Typography>
              <Typography
                noWrap
                component="a"
                sx={{
                  fontFamily: "Manrope",
                  color: "#0E204E",
                  textDecoration: "none",
                  textWrap: "pretty",
                  justifyContent: "center"
                }}
              >
                a community that gives you a taste of <br /> happiness, a place
                you’ll love to live and an
                <br /> opportunity to build a home.
              </Typography>
              <Button
                variant="contained"
                sx={{
                  fontFamily: "Manrope",
                  textTransform: "none",
                  fontSize: "17px",
                  borderRadius: 0,
                  backgroundColor: "#0E204E",
                  mt: 4,
                  display: {
                    xs: "none",
                    md: "flex",
                    lg: "flex",
                   
                    width: "239px",
                    height: "62px"
                  }
                }}
              >
                Join Now
              </Button>
            </Box>
          </Grid>
          <Grid
            size={6}
            sx={{
              display: { sm: "none", md: "flex", lg: "flex" },
              m: 10
            }}
          >
            <Box>

              <Box
                sx={{
                  
                  width: "412px",
                  height: "358px",
                  bgcolor: "#0E204E",
                  py: 10,
                  mt: 20,
                 
                }}
              ></Box>
              <Image
                alt="home about"
                src={girl}
                priority={true}
                style={{
                  margin: 50,
                  marginLeft: "200px",
                  width: "552px",
                  height: "725px",
                  marginTop: "-500px",
                  position: "absolute"
                }}
              />
            </Box>
          </Grid>
        </Grid> */}
      </Box>
    </>
  )
}
export default BecomeAgent