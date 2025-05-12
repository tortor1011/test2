import { Box } from '@mui/material';
import Layout from './layout';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import GallerySection from './components/GallerySection';
import ContactSection from './components/Contact';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';

export default function Home() {
  return (
    <Layout>
      <HeroSection />
    
    </Layout>
  );
}