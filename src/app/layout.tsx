import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "../styles/globals.css"
import AppHeader from "@/components/app-header"
import AppFooter from "@/components/app-footer"
import CandleContextProvider from "@/contexts/candle-context"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "My Gritty Shop",
  description: "Edited by smiley",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`flex flex-col items-center min-h-screen text-[#7789A7] -z-[999] ${inter.className}`}
      >
        <div className="w-[1100px]">
          <AppHeader />
          <CandleContextProvider>{children}</CandleContextProvider>
          <AppFooter />
        </div>
      </body>
    </html>
  )
}
