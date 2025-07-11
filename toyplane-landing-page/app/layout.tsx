import './globals.css'
import { ReactNode } from 'react'

export const metadata = {
  title: 'Toy Plane',
  description: 'Landing page for Toy Plane 3D product',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
