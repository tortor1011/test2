import Image from "next/image"
import { Box } from "@mui/material"
import Tree from "../../../public/LogoFrame/Tree.png"
import SmartHome from "../../../public/LogoFrame/SmartHome.png"
import GoodRate from "../../../public/LogoFrame/GoodRate.png"

const LogoFirstrow = () => {
  return (
    <>
     <Box>
        <Image 
        alt="Tree"
        src={Tree}
        priority={true}
        style={{
            marginLeft:"100px"
        }}
        />

        <Image 
        alt="Tree"
        src={SmartHome}
        priority={true}
        style={{
            marginLeft:"110px"
        }}
        />

        <Image 
        alt="Tree"
        src={GoodRate}
        priority={true}
        style={{
            marginLeft:"110px"
        }}
        />
     </Box>
    </>
  )
}
export default LogoFirstrow