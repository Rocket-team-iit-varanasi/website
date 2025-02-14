import Image from 'next/image'
import Navbar from "./components/navbar"
import Footer from "./components/footer"
import './globals.css'

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Next.js App",
  icons: {
    icon: "/rocket-icon.png",
    shortcut: "/rocket-icon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Rocket Team</title>
        <link rel="icon" type="image/png" href="./rocket-icon.png"></link>
      </head>
      <body>
        <Navbar />
        <main className="container mx-auto py-10">{children}</main>
        <Footer />
      </body>
    </html>
  )
}