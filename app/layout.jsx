"use client";
import ComFooter from "@/components/ComFooter";
import Navbar from "@/components/Navbar";
import { SessionProvider } from "next-auth/react";
import { Inter } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children, ...props }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextTopLoader color="#FFFFFF" height={3} speed={200} />
        <SessionProvider session={props.session}>
          <Navbar />
          {children}
          <ComFooter />
        </SessionProvider>
      </body>
    </html>
  );
}
