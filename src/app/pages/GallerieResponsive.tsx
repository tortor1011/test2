import { Box, Grid, Typography } from "@mui/material"
import Image from "next/image"
import one from "../../../public/image/thisresgalle/one.svg"
import two from "../../../public/image/thisresgalle/two.svg"
import three from "../../../public/image/thisresgalle/three.svg"
import four from "../../../public/image/thisresgalle/four.svg"
import five from "../../../public/image/thisresgalle/five.svg"
import six from "../../../public/image/thisresgalle/six.svg"
import seven from "../../../public/image/thisresgalle/seven.svg"
import eight from "../../../public/image/thisresgalle/eight.svg"
import nine from "../../../public/image/thisresgalle/nine.svg"
import ten from "../../../public/image/thisresgalle/ten.svg"
import eleven from "../../../public/image/thisresgalle/eleven.svg"
import twele from "../../../public/image/thisresgalle/twele.svg"
import thirteen from "../../../public/image/thisresgalle/thirteen.svg"

const GallerieResponsive = () => {
  return (
    <>
      <Box
        sx={{
          display: { xs: "flex", md: "none", lg: "none" },
          justifyContent: "center",
          
        }}
      >
        <Box>
          <Typography
            variant="h4"
            component="a"
            fontWeight={700}
            sx={{
              fontFamily: "Playfair Display",
              
              color: "#0E206E"
            }}
          >
            Available Homes
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: { xs: "flex", md: "none", lg: "none" },
          justifyContent: "center",
          mt: 2
        }}
      >
        <Box>
          <Typography
            fontWeight={300}
            sx={{
              fontFamily: "Lato",
              color: "#0E206E",
              textDecoration: "none",
              px: 6,
              textAlign: "center"
            }}
          >
            a community that gives you a taste of happiness, a place you’ll love
            to live and an opportunity to build a home.
          </Typography>
        </Box>
      </Box>

      <Grid
        container
        spacing={2}
        sx={{
          display: { xs: "flex", md: "none", lg: "none" },
          mt: 2,
          px: 4
        }}
      >
        <Grid
          size={6}
          sx={{
            display: { xs: "flex", md: "none", lg: "none" }
          }}
        >
          <Image
            alt="home about"
            src={one}
            priority={true}
            style={{ width: "100%", height: "100%" }}
          />
        </Grid>
        <Grid
          size={6}
          sx={{
            display: { xs: "flex", md: "none", lg: "none" }
          }}
        >
          <Image
            alt="home about"
            src={two}
            priority={true}
            style={{ width: "100%", height: "100%" }}
          />
        </Grid>
        <Grid
          size={6}
          sx={{
            display: { xs: "flex", md: "none", lg: "none" }
          }}
        >
          <Image
            alt="home about"
            src={three}
            priority={true}
            style={{ width: "100%", height: "100%" }}
          />
        </Grid>
        <Grid
          size={6}
          sx={{
            display: { xs: "flex", md: "none", lg: "none" }
          }}
        >
          <Image
            alt="home about"
            src={four}
            priority={true}
            style={{ width: "100%", height: "100%" }}
          />
        </Grid>
      </Grid>

      <Grid
        container
        spacing={2}
        flexWrap={"wrap"}
        sx={{
          display: { xs: "flex", md: "none", lg: "none" },
          mt: 2,
          px: 4
        }}
      >
        <Grid
          size={6}
          sx={{
            display: { xs: "flex", md: "none", lg: "none" }
          }}
        >
          <Image
            alt="home about"
            src={five}
            priority={true}
            style={{ width: "100%", height: "100%" }}
          />
        </Grid>
        <Grid
          size={6}
          sx={{
            display: { xs: "flex", md: "none", lg: "none" },
            position: "relative"
          }}
        >
          <Image
            alt="home about"
            src={six}
            priority={true}
            style={{ width: "100%", height: "200%", position: "absolute" }}
          />
        </Grid>

        <Grid
          size={6}
          sx={{
            display: { xs: "flex", md: "none", lg: "none" }
          }}
        >
          <Image
            alt="home about"
            src={seven}
            priority={true}
            style={{ width: "100%", height: "100%" }}
          />
        </Grid>
      </Grid>
      <Grid
        container
        spacing={2}
        flexWrap={"wrap"}
        flexDirection={"row-reverse"}
        sx={{
          display: { xs: "flex", md: "none", lg: "none" },
          mt: 2,
          px: 4
        }}
      >
        <Grid
          size={6}
          sx={{
            display: { xs: "flex", md: "none", lg: "none" }
          }}
        >
          <Image
            alt="home about"
            src={twele}
            priority={true}
            style={{ width: "100%", height: "100%" }}
          />
        </Grid>

        <Grid
          size={6}
          sx={{
            display: { xs: "flex", md: "none", lg: "none" },
            position: "relative"
          }}
        >
          <Image
            alt="home about"
            src={eight}
            priority={true}
            style={{ width: "100%", height: "200%", position: "absolute" }}
          />
        </Grid>
        <Grid
          size={6}
          sx={{
            display: { xs: "flex", md: "none", lg: "none" }
          }}
        >
          <Image
            alt="home about"
            src={nine}
            priority={true}
            style={{ width: "100%", height: "100%" }}
          />
        </Grid>
      </Grid>
      <Grid
        container
        spacing={2}
        sx={{
          display: { xs: "flex", md: "none", lg: "none" },
          my: 2,
          px: 4
        }}
      >
        <Grid
          size={6}
          sx={{
            display: { xs: "flex", md: "none", lg: "none" }
          }}
        >
          <Image
            alt="home about"
            src={ten}
            priority={true}
            style={{ width: "100%", height: "100%" }}
          />
        </Grid>
        <Grid
          size={6}
          sx={{
            display: { xs: "flex", md: "none", lg: "none" }
          }}
        >
          <Image
            alt="home about"
            src={eleven}
            priority={true}
            style={{ width: "100%", height: "100%" }}
          />
        </Grid>
        <Grid
          size={12}
          sx={{
            display: { xs: "flex", md: "none", lg: "none" }
          }}
        >
          <Image
            alt="home about"
            src={thirteen}
            priority={true}
            style={{ width: "100%", height: "100%" }}
          />
        </Grid>
      </Grid>
      
    </>
  )
}
export default GallerieResponsive
