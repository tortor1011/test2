import React from 'react'
import Image from 'next/image'
import { Box ,Typography } from "@mui/material"
import copyright from '../../../public/galleries/Copyright.svg'

function FooterResponsive() {
  return (
    <>
      <Box
        sx={{
          display: { xs: "flex", md: "none", lg: "none" },
          justifyContent: "center",
          width: "100%",
          height: "100px",
          bgcolor: "#0E204E",
          mt: 5
        }}
      >
        <Box sx={{
          mt: 2
        }} >
          <Typography
            variant="h6"
            component="a"
            sx={{

              fontFamily: "Lato",
              color: "white",
              textDecoration: "none",
              textWrap: "pretty",
              textAlign: "center"
              , fontSize: "18px"
            }}
          >
            Pineapple Island
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: { xs: "flex", md: "none", lg: "none" },
          justifyContent: "center",
          mt: -6
        }}
      >
        <Box>
          <Image
            alt="copyright"
            src={copyright}
            style={{
              marginLeft: 35,
              width: "16px",
              height: "16px"
            }}
          />
          <Typography
            component="a"
            sx={{
              fontFamily: "Lato",
              color: "white",
              textDecoration: "none",
              textWrap: "pretty",
              textAlign: "center",
              ml: 1,
              mt: 1
            }}
          >
            Copyright 2021 Glowdsgn All Rights Reserved
          </Typography>
        </Box>
      </Box>
    </>
  )
}
export default FooterResponsive
