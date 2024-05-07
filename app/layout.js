import React from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import TransitionProvider from "./components/transitionprovider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "LIBRA Dev Portfolio",
  description: "My portfolio website built with next js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <TransitionProvider>
          { children }
        </TransitionProvider>
      </body>
    </html>
  );
}
