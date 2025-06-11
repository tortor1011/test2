import React from 'react'
import {
  Box,
  Button,
  FormLabel,
  Grid,
  TextField,
  Typography
} from "@mui/material"

function Contactresonsive() {
  return (
    <>
    <Box
          sx={{
            display: { xs: "flex", md: "none", lg: "none" },
            width: "max",
            height: "262px",
            bgcolor: "#0E204E",
            justifyContent: "center"
          }}
        >
          <Typography
            variant="h5"
            fontWeight={700}
            sx={{
              mt: 4,
              fontFamily: "Playfair Display",
              color: "white",
              textDecoration: "none"
            }}
          >
            Become an Agent
          </Typography>
        </Box>
        <Box
          sx={{
            display: { xs: "flex", md: "none", lg: "none" },
            justifyContent: "center"
          }}
        >
          <Typography
            fontWeight={300}
            sx={{
              mt: -22,
              fontFamily: "Lato",
              color: "white",
              textDecoration: "none",

              textAlign: "center",
              ml: 10,
              pr: 8
            }}
          >
            A community that gives you a taste of happiness, a place you’ll love
            to <br />
            live and an opportunity to build a home.
          </Typography>
        </Box>
        <Box
          sx={{
            display: { xs: "flex", md: "none", lg: "none" },
            justifyContent: "center"
          }}
        >
          <Button
            variant="contained"
            sx={{
              fontFamily: "Lato",
              textTransform: "none",
              width: "103px",
              height: "40px",
              mt: -10,
              backgroundColor: "white",
              color: "#0E204E"
            }}
          >
            Join Now
          </Button>
        </Box>

        <Box
          sx={{
            display: { xs: "flex", md: "none", lg: "none" },
            justifyContent: "center"
          }}
        >
          <Typography
            variant="h5"
            fontWeight={700}
            sx={{
              mt: 6,
              fontFamily: "Playfair Display",
              color: "#0E204E",
              textDecoration: "none"
            }}
          >
            Stay In Touch
          </Typography>
        </Box>
        <Box
          sx={{
            display: { xs: "flex", md: "none", lg: "none" },
            justifyContent: "center"
          }}
        >
          <Typography
            fontWeight={300}
            sx={{
              mt: 3,
              fontFamily: "Lato",
              color: "#0E204E",
              px: 2,
              textDecoration: "none",
              textAlign: "center"
            }}
          >
            If you are interested in finding out more about The Discovery
            Village, leave a message
          </Typography>
        </Box>
        <Box>
          <Grid
            container
            sx={{
              display: { sm: "flex", md: "none", lg: "none" },
              justifyContent: "center",
              alignItems:"center",
              mt: 5
            }}
            rowSpacing={2}
          >
            <Box>
              <Grid size={12} sx={{}}>
                <TextField
                  label="Name"
                  variant="standard"
                  sx={{
                    width: "275px"
                  }}
                  InputLabelProps={{
                    sx: {
                      fontFamily: "Lato",
                      fontSize: "17px"
                    }
                  }}
                />
              </Grid>
              <Grid size={12}>
                <TextField
                  label="Phone No"
                  variant="standard"
                  sx={{
                    width: "275px"
                  }}
                  InputLabelProps={{
                    sx: {
                      fontFamily: "Lato",
                      fontSize: "17px"
                    }
                  }}
                />
              </Grid>
              <Grid size={12}>
                <TextField
                  label="Email"
                  variant="standard"
                  sx={{
                    width: "275px"
                  }}
                  InputLabelProps={{
                    sx: {
                      fontFamily: "Lato",
                      fontSize: "17px"
                    }
                  }}
                />
              </Grid>
              <Grid
                size={12}
                sx={{
                  my: 2
                }}
              >
                <FormLabel
                  style={{
                    fontFamily: "Lato"
                  }}
                >
                  Message
                </FormLabel>
              </Grid>
              <Grid size={12} sx={{}}>
                <TextField
                  name="Message"
                  id="outlined-basic"
                  variant="outlined"
                  inputProps={{
                    style: {
                      fontFamily: "Lato",
                      height: "83px"
                    }
                  }}
                  sx={{
                    width: "275px",
                    [`& fieldset`]: {
                      borderRadius: 0
                    }
                  }}
                />
              </Grid>
              <Grid
            
                size={12}
                sx={{
                  mt: 2,
                  display:{
                    xs:"flex",
                    md:"none",
                    lg:"none",
                    xl:"none"
                  },
                  justifyContent:"center"
                }}
              >
                <Button
                  variant="contained"
                  sx={{
                    fontFamily: "Lato",
                    textTransform: "none",
                    width: "82px",
                    height: "40px",
                    backgroundColor: "#0E204E",
                    color: "white"
                  }}
                >
                  Send
                </Button>
              </Grid>
            </Box>
          </Grid>
        </Box>
      </>
  )
}

export default Contactresonsive
