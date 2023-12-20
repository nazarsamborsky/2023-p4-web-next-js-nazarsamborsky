import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.min.css';
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Database of cars',
  description: 'Just an cheap looking app to show off my crappy skills of nextJS',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
