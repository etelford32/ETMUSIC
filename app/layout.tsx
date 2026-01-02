import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'the E.T. | Music Distribution & Marketing',
  description: 'Digital distribution and marketing platform for the E.T. - Showcasing sound design, OST for Explore the Universe 2175, and Eros albums.',
  keywords: ['E.T.', 'Elliot Telford', 'music', 'sound design', 'Eros', 'Explore the Universe 2175'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Inter:wght@300;400;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body">
        {children}
      </body>
    </html>
  )
}
