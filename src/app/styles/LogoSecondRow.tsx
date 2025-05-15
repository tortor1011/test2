import Image from "next/image"
import { Box } from "@mui/material"
import Setting from "../../../public/LogoFrame/ServiceApt.png"
import PrivateLock from "../../../public/LogoFrame/PrivateLock.png"
import Light from "../../../public/LogoFrame/Light.png"

const LogoSecondRow = () => {
  return (
    <>
     <Box>
        <Image 
        alt="Setting"
        src={Setting}
        priority={true}
        style={{
            marginRight:"80px"
        }}
        />

        <Image 
        alt="PrivateLock"
        src={PrivateLock}
        priority={true}
        style={{
            marginRight:"80px"
        }}
        />

        <Image 
        alt="Light"
        src={Light}
        priority={true}
        style={{
            marginRight:"0px"
        }}
        />
     </Box>
    </>
  )
}
export default LogoSecondRow