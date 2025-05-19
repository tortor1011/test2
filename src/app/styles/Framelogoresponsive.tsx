import React from 'react'
import { Box, Grid, Typography } from "@mui/material"
import Image from 'next/image'
import Setting from "../../../public/LogoFrame/ServiceApt.png"
import PrivateLock from "../../../public/LogoFrame/PrivateLock.png"
import Light from "../../../public/LogoFrame/Light.png"
import Tree from "../../../public/LogoFrame/Tree.png"
import SmartHome from "../../../public/LogoFrame/SmartHome.png"
import GoodRate from "../../../public/LogoFrame/GoodRate.png"
import Money from "../../../public/LogoFrame/Money.png"
import newsetting from "../../../public/LogoFrame/Setting.png"
import Privatesecurity from "../../../public/LogoFrame/Privatesecurity.png"
import Internet from "../../../public/LogoFrame/Internet.png"
import Electricy from "../../../public/LogoFrame/Electricy.png"
import EcoFriendly from "../../../public/LogoFrame/EcoFriendly.png"

function Framelogoresponsive() {
  return (
    <>
      <Grid
        container
        columns={3}
        sx={{
          display: { xs: "flex", md: "none", lg: "none" },
          mt: 5,
          px: 6,
          
          
        }}
      >
        <Box
          sx={{
            display: { xs: "flex", md: "none", lg: "none" },
            justifyContent: "center"
          }}
        >
          <Grid size={4}>
            <Box
              sx={{
                ml: 2,
                
              }}
            >
              <Image
                alt="Tree"
                src={EcoFriendly}
                priority={true}
                style={{
                  justifyContent: "center",
                  width: "32px",
                  height: "32px"
                }}
              />
            </Box>

            <Box>
              {/* <Typography
                sx={{
                  fontSize: "12px",
                  fontFamily: "Poppins",
                  color: "white"
                }}
              >
                Eco Friendly
              </Typography> */}
            </Box>
          </Grid>
        </Box>
        <Box
          sx={{
            ml:2
          }}
        >
          <Grid size={4}>
            <Box
              sx={{
                ml: 3
              }}
            >
              <Image
                alt="SmartHome"
                src={Internet}
                priority={true}
                style={{
                  justifyContent: "center",
                  width: "32px",
                  height: "32px"
                }}
              />
            </Box>

            <Box>
              {/* <Typography
                sx={{
                  fontSize: "12px",
                  fontFamily: "Poppins",
                  color: "white"
                }}
              >
                Smart Homes
              </Typography> */}
            </Box>
          </Grid>
        </Box>
        <Box
          sx={{
            pl: 3
          }}
        >
          <Grid size={4}>
            <Box
              sx={{
                ml: 2
              }}
            >
              <Image
                alt="Money"
                src={Money}
                priority={true}
                style={{
                  justifyContent: "center",
                  width: "32px",
                  height: "32px"
                }}
              />
            </Box>

            <Box>
              {/* <Typography
                sx={{
                  fontSize: "12px",
                  fontFamily: "Poppins",
                  color: "white"
                }}
              >
                Good Rates
              </Typography> */}
            </Box>
          </Grid>
        </Box>
        <Box
          sx={{
            mt: 4
          }}
        >
          <Grid size={4}>
            <Box
              sx={{
                ml: 2
              }}
            >
              <Image
                alt="Setting"
                src={newsetting}
                priority={true}
                style={{
                  justifyContent: "center",
                  width: "32px",
                  height: "32px"
                }}
              />
            </Box>

            <Box>
              {/* <Typography
                sx={{
                  fontSize: "12px",
                  fontFamily: "Poppins",
                  color: "white",
                  textAlign: "center"
                }}
              >
                Serviced <br />
                Apartment
              </Typography> */}
            </Box>
          </Grid>
        </Box>
        <Box
          sx={{
            mt: 4
          }}
        >
          <Grid size={4}>
            <Box
              sx={{
                ml: 5.5
              }}
            >
              <Image
                alt="PrivateLock"
                src={Privatesecurity}
                priority={true}
                style={{
                  justifyContent: "center",
                  width: "32px",
                  height: "32px"
                }}
              />
            </Box>

            <Box sx={{}}>
              {/* <Typography
                sx={{
                  ml: 5,
                  fontSize: "12px",
                  fontFamily: "Poppins",
                  color: "white",
                  textAlign: "center"
                }}
              >
                Private
                <br />
                Security
              </Typography> */}
            </Box>
          </Grid>
        </Box>
        <Box
          sx={{
            mt: 4
          }}
        >
          <Grid size={4}>
            <Box
              sx={{
                ml: 6
              }}
            >
              <Image
                alt="Light"
                src={Electricy}
                priority={true}
                style={{
                  justifyContent: "center",
                  width: "32px",
                  height: "32px",
                  marginLeft:10
                }}
              />
            </Box>

            <Box>
              {/* <Typography
                sx={{
                  fontSize: "12px",
                  fontFamily: "Poppins",
                  color: "white",
                  textAlign: "center",
                  ml: 6
                }}
              >
                24/7
                <br />
                Electricity
              </Typography> */}
            </Box>
          </Grid>
        </Box>
      </Grid>
      
    </>
  )
}

export default Framelogoresponsive