import { Source_Sans_3, Source_Serif_4, Nunito } from "next/font/google"
import "./globals.css"
import HeaderComponent from "./components/header/headerComponent"
import Footer from "./components/footer/footerComponent"


export const metadata = {
  title: "Visiple Cloud-based meetings",
  description: "Modern platform for cloud-based meetings",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="layout">
          <HeaderComponent />
          <main className="main">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
