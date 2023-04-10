import './globals.css'
import { IBM_Plex_Mono } from 'next/font/google'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

const IBMMono = IBM_Plex_Mono({
  weight: ['200', '700'],
  subsets: ['latin']
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={IBMMono.className} >
        <main>
          {children}
        </main>
        </body>
    </html>
  )
}
