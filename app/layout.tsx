import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { EstimateModalProvider } from '@/components/EstimateModal'

export const metadata: Metadata = {
  title: 'Galaxy Plumbing Inc. | Your Go-To-Guys | Toronto & GTA',
  description: "Galaxy Plumbing Inc. — Toronto's premier plumbing experts with 20+ years of excellence. 24/7 emergency service across the GTA. Call 416-727-5810.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <EstimateModalProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </EstimateModalProvider>
      </body>
    </html>
  )
}
