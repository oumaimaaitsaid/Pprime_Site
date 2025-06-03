import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"


const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Pprime - Experts en installations électriques",
  description: "Experts en installations électriques, nous proposons nos services dans une variété de domaines",
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer/>
      </body>
    </html>
  )
}
