import Image from "next/image";
import { Box, Grid, Typography } from "@mui/material";
import Setting from "../../../public/picturenotext/funfueng.png";
import PrivateLock from "../../../public/picturenotext/lock.png";
import Light from "../../../public/picturenotext/LightTube.png";

const LogoSecondRow = () => {
  return (
    <Box  sx={{ display:{xs:"none",sm:"flex",lg:"flex"}, justifyContent: "center", width: "100%" ,gap:"30px"}}>
     
        <Grid  sx={{ display: {xs:"none",sm:"flex",lg:"flex"}, flexDirection: 'column', alignItems: 'center', }}>
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

        <Grid  sx={{ display: {xs:"none",sm:"flex",lg:"flex"}, flexDirection: 'column', alignItems: 'center',}}>
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

        <Grid  sx={{ display: {xs:"none",sm:"flex",lg:"flex"}, flexDirection: 'column', alignItems: 'center',}}>
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