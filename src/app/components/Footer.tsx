import { Box, Typography, Grid, TextField, Button } from '@mui/material';

export default function Footer() {
  return (
    <Box
      sx={{
          display: { xs: "none", md: "flex", lg: "flex" },
          width: "100%",
          height: "396px",
          bgcolor: "#0E204E",
          justifyContent:"center",
          mt: 10,
          clipPath:
            "polygon(100% 42%, 100% 100%, 96% 100%, 84% 100%, 0 100%, 0 32%, 11% 12%)"
        }}>
      <Box sx={{
            ml: { xs: "none", md: 20, lg: 30 },
            mt: 15,
            width: "270px",
            mr:{ xs: "none", sm:0,md: 7, lg: 30 }
          }}>
        <Typography variant="h4"
            noWrap
            component="a"
            fontWeight={500}
            sx={{
              display: { xs: "none", md: "flex", lg: "flex" },
              mb: 2,
              fontFamily: "Manrope",
              color: "white",
              textDecoration: "none"
            }}>
          Banana Island
        </Typography>
        <Typography component="a"
            sx={{
              fontFamily: "Manrope",
              color: "white",
              textDecoration: "none",
              textWrap: "pretty"
            }}>
          a community that gives you a taste of happiness, a place you’ll love to live and an opportunity to build a home.
        </Typography>
      </Box>

      <Box sx={{
           
            mt: 20,
            width: "270px"
          }}>
        <Typography variant="h4"
            noWrap
            component="a"
            fontWeight={500}
            sx={{
              display: { xs: "none", md: "flex", lg: "flex" },
              mb: 2,
              fontFamily: "Playfair Display",
              color: "white",
              textDecoration: "none"
            }}>
          Follow up
        </Typography>
        <Typography component="a"
            sx={{
              fontFamily: "Manrope",
              color: "white",
              textDecoration: "none",
              textWrap: "pretty"
            }}>
          Keep up with our newsletter to get
          updates about projects and offers
        </Typography>
        <TextField name="Email"
            id="outlined-basic"
            label="Email"
            variant="outlined"
            sx={{
              mt: 2,
              bgcolor: "white",
              width: "419px",
              position: "relative",
              [`& fieldset`]: {
                borderRadius: 0
              },

              [`& label`]: {
                fontFamily: "Manrope"
              }
            }}>
              
        </TextField>
        <Button
            variant="text"
            sx={{
              mt: -6,
              ml: 39,
              position: "absolute",
              fontFamily: "Manrope",
              textTransform: "none",
              borderRadius: 0,
              color: "grey"
            }}
          >
            Subscribe
          </Button>
        
      </Box>
    </Box>
  );
}