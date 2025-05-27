import Image from "next/image";
import { Box, Grid, Typography } from "@mui/material";
import Setting from "../../../public/picturenotext/funfueng.png";
import PrivateLock from "../../../public/picturenotext/lock.png";
import Light from "../../../public/picturenotext/LightTube.png";

const LogoSecondRow = () => {
  return (
    <Box  sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
      <Grid
        container
        spacing={2}
        justifyContent="center"
        alignItems="center"
        sx={{ maxWidth: "800px" }}
      >
        <Grid item xs={4} sx={{ textAlign: "center" }}>
          <Image
            alt="Setting"
            src={Setting}
            priority={true}
            style={{
              width: "50px",
              height: "auto",
            }}
          />
          <Typography sx={{ mt: 1 }}>
            Serviced Apartment
          </Typography>
        </Grid>

        <Grid item xs={4} textAlign="center">
          <Image
            alt="PrivateLock"
            src={PrivateLock}
            priority={true}
            style={{
              width: "50px",
              height: "auto",
            }}
          />
          <Typography sx={{ mt: 1 }}>
            Private Security
          </Typography>
        </Grid>

        <Grid item xs={4} textAlign="center">
          <Image
            alt="Light"
            src={Light}
            priority={true}
            style={{
              width: "50px",
              height: "auto",
              marginTop: "5px",
            }}
          />
          <Typography sx={{ mt: "6px" }}>
            24/7 Electricity
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LogoSecondRow;