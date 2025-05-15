"use client"
import { ReactNode } from 'react';
import LogoFirstrow from './styles/LogoFirstrow';
import HoneSection from "./pages/HomeSection"
import Home from './pages/HomeSection';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    
      <html>
      <body>
        {children}
      </body>
    </html>
    
  );
}