import Image from "next/image";
import { Box, Grid, Typography } from "@mui/material";
import Setting from "../../../public/picturenotext/funfueng.png";
import PrivateLock from "../../../public/picturenotext/lock.png";
import Light from "../../../public/picturenotext/LightTube.png";

const LogoSecondRow = () => {
  return (
    <Box  sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
     
        <Grid  sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center',marginRight:{sm:10,md:10,lg:5} }}>
          <Image
            alt="Setting"
            src={Setting}
            priority={true}
            style={{
              maxWidth: "50px",
              width:"100%",
              height: "auto",
            }}
          />
          <Typography sx={{ mt: 1, }}>
            Serviced Apartment
          </Typography>
        </Grid>

        <Grid  sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center',marginRight:{sm:10,md:10,lg:5} }}>
          <Image
            alt="PrivateLock"
            src={PrivateLock}
            priority={true}
            style={{
              maxWidth: "50px",
              width:"100%",
              height: "auto",
            }}
          />
          <Typography sx={{ mt: 1,  }}>
            Private Security
          </Typography>
        </Grid>

        <Grid  sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center',marginRight:5 }}>
          <Image
            alt="Light"
            src={Light}
            priority={true}
            style={{
              maxWidth: "33px",
              width:"100%",
              height: "auto",
              marginTop: "5px",
            }}
          />
          <Typography sx={{ mt: "6px ",whiteSpace:"nowrap" }}>
            24/7 Electricity
          </Typography>
        </Grid>
    </Box>
  );
};

export default LogoSecondRow;