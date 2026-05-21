import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter"
})

export const metadata: Metadata = {
  title: 'Mayank Sen | UI/UX Designer & Product Designer',
  description: 'UI/UX Designer with experience designing responsive dashboards, mobile apps, SaaS products, fintech platforms, LMS systems, and operational workflows.',
  keywords: ['UI/UX Designer', 'Product Designer', 'Dashboard Design', 'Mobile App Design', 'SaaS', 'Figma'],
  authors: [{ name: 'Mayank Sen' }],
  openGraph: {
    title: 'Mayank Sen | UI/UX Designer & Product Designer',
    description: 'Designing scalable digital experiences for web and mobile products.',
    type: 'website',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#0B0B0F',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
