import { Box, Typography, Grid, TextField, Button } from '@mui/material'

export default function Footer() {
  return (
    <Box
      sx={{
          display: { xs: "none", md: "flex", lg: "flex" },
          width: "100%",
          height: "396px",
          bgcolor: "#0E204E",
          justifyContent:"center",
          gap:"50px",
          clipPath:
            "polygon(100% 42%, 100% 100%, 96% 100%, 84% 100%, 0 100%, 0 32%, 11% 12%)"
        }}>
      <Box sx={{
        display: { xs: "none", md: "flex", lg: "flex" },
        flexWrap:"wrap",
  
        alignContent:"center",
        width:"20%",
        justifyContent:"center",
         flexDirection:"column"
      }}>
        <Typography variant="h3"
            noWrap
            component="a"
            fontWeight={500}
            sx={{
              display: { xs: "none", md: "flex", lg: "flex" },
              fontFamily: "Manrope",
              color: "white",
              textDecoration: "none"
            }}>
          Banana <br /> Island
        </Typography>
        <Typography component="a"
            sx={{
              fontFamily: "Manrope",
              color: "white",
              textDecoration: "none",
              textWrap: "pretty",
              fontSize:"20px"
            }}>
          a community that gives you a taste of happiness, a place you’ll love to live and an opportunity to build a home.
        </Typography>
      </Box>

      <Box sx={{
        display: { xs: "none", md: "flex", lg: "flex" },
        flexWrap:"wrap",
        justifyContent:'center',
        flexDirection:"column",
        width:'20%'
      }}>
        <Typography variant="h4"
            noWrap
            component="a"
            fontWeight={500}
            sx={{
              display: { xs: "none", md: "flex", lg: "flex" },
              fontFamily: "Playfair Display",
              color: "white",
              textDecoration: "none"
            }}>
          Follow up
        </Typography>
        <Typography component="a"
            sx={{
              flexWrap:"wrap",
              fontFamily: "Manrope",
              color: "white",
              textDecoration: "none",
              textWrap: "pretty",
              fontSize:"20px"
            }}>
          Keep up with our newsletter to get
          updates about projects and offers
        </Typography>
        <Box sx={{ position: "relative", width: "419px", mt: 3 }}>
          <TextField
            name="Email"
            id="outlined-basic"
            label="Email"
            variant="outlined"
            fullWidth
            sx={{
              bgcolor: "white",
              [`& fieldset`]: {
          borderRadius: 0
              },
              [`& label`]: {
          fontFamily: "Manrope"
              }
            }}
            InputProps={{
              endAdornment: (
          <Button
            variant="text"
            sx={{
              fontFamily: "Manrope",
              textTransform: "none",
              borderRadius: 0,
              color: "grey",
              minWidth: "auto",
              px: 2
            }}
          >
            Subscribe
          </Button>
              )
            }}
          />
        </Box>
        
      </Box>
    </Box>
  );
} 
