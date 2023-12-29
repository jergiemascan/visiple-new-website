"use client"
import "./globals.css"
import HeaderComponent from "./components/header/headerComponent"
import { usePathname } from "next/navigation"
import Footer from "./components/footer/footerComponent"

const metadata = {
  title: "Visiple Cloud-based meetings",
  description: "Modern platform for cloud-based meetings",
}

export default function RootLayout({ children }) {
  const pathname = usePathname()

  const paths = ["/"]
  const isHomepage = paths.includes(pathname)
  return (
    <html lang="en">
      <body>
        <div className="layout">
          <HeaderComponent />
          <main className="main">{children}</main>
          {!isHomepage && <Footer />}
        </div>
      </body>
    </html>
  )
}
