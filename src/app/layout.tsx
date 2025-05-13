import { Box } from '@mui/material';
import Header from './components/Header';
import Footer from './components/Footer';

import { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <Box>
      
         <main>{children}</main>
      
    </Box>
  );
}