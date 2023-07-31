import Head from 'next/head'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'EMC Personal Training & Wellness Coaching',
  description: 'Fully Equipped Private Training Facility in Dorset - 1 to 1 Personal Training and Coaching',
  openGraphImage: '/pt-logo-512-3.png'

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <Head>
        <title>{metadata.title as string}</title>
        <meta name="description" content={metadata.description as string} />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:image" content={metadata.openGraphImage} />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
