"use client"
import { ReactNode } from 'react';
import LogoFirstrow from './styles/LogoFirstrow';
import HoneSection from "./pages/HomeSection"
import Home from './pages/HomeSection';
import { Manrope  } from 'next/font/google';

 
const manrope = Manrope({
  subsets: ['latin'],
  weight:["400","200","300"]
})

 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={manrope.className}>
      <body>{children}</body>
    </html>
  )
}