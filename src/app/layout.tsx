import Navbar from "./components/navbar"
import Footer from "./components/footer"
import './globals.css'

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