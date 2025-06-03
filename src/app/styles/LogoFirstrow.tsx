import Image from "next/image"
import { Box,Grid,Typography } from "@mui/material"
import Tree from "../../../public/picturenotext/tree-evergreen-20-regular.png"
import SmartHome from "../../../public/picturenotext/network (1).png"
import GoodRate from "../../../public/picturenotext/BlingBling.png"

const LogoFirstrow = () => {
  return (
    <>
          <Box sx={{display:{xs:"none",sm:"flex",lg:"flex"},gap:"30px"}}>
        <Grid>
            <Image 
            alt="Tree"
            src={Tree}
            priority={true}
            style={{
             
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