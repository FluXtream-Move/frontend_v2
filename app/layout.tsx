import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';
import './globals.css'
import ThemeProvider from "../components/layout/ThemeToggle/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import Providers from "@/components/layout/providers";
import { WalletProvider } from "@/context/WalletProvider";
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'FluXtream',
  description: 'Let the Tokens Flow', 
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (

    <html lang="en">
      <body className={inter.className}>
      <WalletProvider>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <Toaster />
        {children}
        <Analytics />
        </ThemeProvider>
        </WalletProvider>
        </body>
    </html>
  )
}
