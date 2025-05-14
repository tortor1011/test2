import { Box } from '@mui/material';
import Layout from './layout';
import HomeSection from './pages/HomeSection';
import ContactSection from './pages/Contact';
import { ThemeProvider } from '@mui/material/styles';
import Header from './components/Header'
import Footer from './components/Footer'
import theme from './styles/theme';
import AboutPineapple from './pages/AboutPineapple'
import WhyMustPPAP from './pages/WhyMustPPAP';

export default function Home() {
  return (
    <div>
      <Header />
      <HomeSection />
      <AboutPineapple />
      <WhyMustPPAP />

    </div>
      
    
  );
}