// src/components/Layout.tsx
import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import MatrixRain from "./MatrixRain"

// Inject Roboto Mono font via JavaScript (Vite doesn’t use <html>/<head> the same way as Next.js)
const injectFont = () => {
  const link1 = document.createElement("link")
  link1.rel = "preconnect"
  link1.href = "https://fonts.googleapis.com"
  document.head.appendChild(link1)

  const link2 = document.createElement("link")
  link2.rel = "preconnect"
  link2.href = "https://fonts.gstatic.com"
  link2.crossOrigin = "anonymous"
  document.head.appendChild(link2)

  const link3 = document.createElement("link")
  link3.rel = "stylesheet"
  link3.href =
    "https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;500;600;700&display=swap"
  document.head.appendChild(link3)
}

injectFont()

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col font-mono bg-black text-white">
      <MatrixRain />
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
