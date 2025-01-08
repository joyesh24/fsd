import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'চলো দেশ বদলায়',
  description: 'দেশ বদলের আহ্বান',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="bn">
      <body>{children}</body>
    </html>
  )
}

