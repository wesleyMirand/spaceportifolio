import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/main/StarBackground";
import Navbar from "@/components/main/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio Espacial",
  description: "Esse é meu portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="br">
      <body 
       className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}
      > 
      <StarsCanvas />
      <Navbar />
      {children}
      </body>
    </html>
  );
}