import React from "react";
import type { Metadata, NextPageContext } from "next";
import { Inter } from "next/font/google";
// import PrivyProviderWrapper from "@/providers/AuthProvider";
// import{ ContextProvider} from '@/contexts/ContextProvider';

import { GoogleAnalytics } from '@next/third-parties/google'


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Consigue tu moto!",
  description: "A buen precio mi pana!",
  icons: ['/vercel.svg']
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <html lang="en">
        <GoogleAnalytics
          gaId="G-M53CD5TPJP"
        ></GoogleAnalytics>
        <body className={inter.className}>
            {children}
        </body>
    </html>
    

  );
}
