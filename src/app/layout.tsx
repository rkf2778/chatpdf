import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import Providers from '@/components/Providers'
import { Toaster } from 'react-hot-toast'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ChatPDF',
  description: 'Easily communicate with your documents using AI'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <Providers>
        <html lang='en' suppressHydrationWarning>
          <body className={inter.className}>{children}</body>
          <Toaster />
        </html>
      </Providers>
    </ClerkProvider>
  )
}
