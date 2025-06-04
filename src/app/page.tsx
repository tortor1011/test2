import { Box, Container } from '@mui/material';
import Layout from './layout';
import HomeSection from './pages/HomeSection';
import ContactSection from './pages/Contact';
import { ThemeProvider } from '@mui/material/styles';
import Header from './components/Header'
import Footer from './components/Footer'
import theme from './styles/theme';
import AboutPineappleResponsive from './pages/AboutPineappleResponsive'
import WhyMustPPAP from './pages/WhyMustPPAP';
import WhatPPAPResponsive from './pages/WhatPPAPResponsive';
import Galleries from './pages/Galleries';
import AmazingFeatures from './pages/AmazingFeatures';
import BecomeAgent from './pages/BecomeAgent';
import Contact from './pages/Contact'
import GallerieResponsive from './pages/GallerieResponsive';
import Contactresonsive from './pages/contactresonsive';
import "./styles/globals.css"
import FooterResponsive from './components/FooterResponsive';
import About from "./pages/About"



export default function Home() {
  return (
    <Container maxWidth={false} 
    sx={{
      maxWidth:"1920px",
      pr:"0px !important",
      pl:"0px !important",
    }}>
      <Header />
      <HomeSection />
      <About />
      <WhyMustPPAP />
      <AboutPineappleResponsive />
      
      <WhatPPAPResponsive />
      <Galleries />
      <GallerieResponsive />
      <AmazingFeatures />
      <BecomeAgent />
      <Contact />
      <Contactresonsive />
      <Footer />
      <FooterResponsive /> 
    </Container>
      
    
  );
}