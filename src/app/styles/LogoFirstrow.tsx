import Image from "next/image"
import { Box,Grid,Typography } from "@mui/material"
import Tree from "../../../public/picturenotext/tree-evergreen-20-regular.png"
import SmartHome from "../../../public/picturenotext/network (1).png"
import GoodRate from "../../../public/picturenotext/BlingBling.png"

const LogoFirstrow = () => {
  return (
    <>
          <Box sx={{display:"flex"}}>
        <Grid>
            <Image 
            alt="Tree"
            src={Tree}
            priority={true}
            style={{
              marginRight:"80px",
              maxWidth:"80px",
              width:"100%",
              height: "auto",
            
            }}
            />
            <Typography>
              Eco Friendly
            </Typography>
        </Grid>
        <Grid>
            <Image 
            alt="Smarthome"
            src={SmartHome}
            priority={true}
            style={{
              marginRight:"80px",
              maxWidth:"80px",
              width:"100%",
              height: "auto",
            }}
            />
            <Typography>
              Smart Homes
            </Typography>
        </Grid>

        <Grid>
            <Image 
            alt="Goodrate"
            src={GoodRate}
            priority={true}
            style={{
              marginRight:"80px",
              maxWidth:"80px",
              width:"100%",
              height: "auto",
                marginTop:"15px"
            }}
            />
            <Typography sx={{mt:"11px"}}>
              Good Rates
            </Typography>
        </Grid>
     </Box>
    </>
  )
}
export default LogoFirstrow