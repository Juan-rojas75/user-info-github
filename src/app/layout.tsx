"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import Theme from "./components/common/theme";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
      </head>
          <Suspense fallback={<div>Loading...</div>}>
            <body className={inter.className}>{children}</body>
          </Suspense>            
    </html>
  );
}