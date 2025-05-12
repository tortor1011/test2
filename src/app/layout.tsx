import { Box } from '@mui/material';
import Header from './Header';
import Footer from './Footer';

import { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <Box>
      <Header />
         <main>{children}</main>
      <Footer />
    </Box>
  );
}