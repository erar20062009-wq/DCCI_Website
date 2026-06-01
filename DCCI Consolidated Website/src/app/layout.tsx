import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import '../styles/globals.css'
import HelpBar from '@/components/layout/HelpBar'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import MobileNav from '@/components/layout/MobileNav'
import PageTransition from '@/components/layout/PageTransition'
import SearchOverlay from '@/components/search/SearchOverlay'
import ProgressBar from '@/components/ui/ProgressBar'
import { SITE_NAME, SITE_DESCRIPTION } from '@/lib/utils/constants'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const display = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: ['dementia', 'memory care', 'Alzheimer\'s', 'caregiver', 'Big Bend', 'Tallahassee', 'Florida', 'resources'],
  openGraph: {
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    type: 'website',
    locale: 'en_US',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${display.variable}`}>
      <body>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>

        <ProgressBar />
        <SearchOverlay />

        <div className="flex flex-col min-h-dvh">
          <HelpBar />
          <Header />
          <MobileNav />

          <main id="main-content" className="flex-1" tabIndex={-1}>
            <PageTransition>
              {children}
            </PageTransition>
          </main>

          <Footer />
        </div>
      </body>
    </html>
  )
}
