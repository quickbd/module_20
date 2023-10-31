"use client";
import Header from "@/components/Header";
import { Inter } from "next/font/google";

import "@/public/css/app.css";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
