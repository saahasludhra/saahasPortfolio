import { Analytics } from "@vercel/analytics/next"
import type { Metadata, Viewport } from "next"
import { DM_Sans, Instrument_Serif } from "next/font/google"
import "./globals.css"
import { ScrollToTop } from "@/components/portfolio/scroll-to-top"

const sans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans" })
const serif = Instrument_Serif({ subsets: ["latin"], weight: "400", variable: "--font-instrument-serif" })

export const metadata: Metadata = {
  title: { default: "Saahas Ludhra - Computer Science Student & Builder", template: "%s" },
  description: "A portfolio of Saahas Ludhra's work across Computer Science, AI, interactive software, UI/UX and web development.",
  generator: "Saahas Ludhra portfolio",
  openGraph: { title: "Saahas Ludhra - Computer Science Student & Builder", description: "Projects across Computer Science, AI, interactive software, UI/UX and web development.", type: "website" },
  icons: { icon: "/icon.svg", apple: "/apple-icon.png" },
}

export const viewport: Viewport = { colorScheme: "dark", themeColor: "#111310", width: "device-width", initialScale: 1 }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" data-scroll-behavior="smooth" className={`${sans.variable} ${serif.variable} bg-background`}><body className="font-sans antialiased">{children}<ScrollToTop/>{process.env.NODE_ENV === "production" && <Analytics />}</body></html>
}
