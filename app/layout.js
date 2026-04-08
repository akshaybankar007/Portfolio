import './globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export const metadata = {
  title: 'Akshay Bankar — Software Engineer',
  description: 'Software Engineer with expertise in Java, Go, and Distributed Systems. Specialist in optimizing high-concurrency backend infrastructure and scalable AI solutions.',
  keywords: 'Akshay Bankar, Software Engineer, Backend Developer, Java, Go, Distributed Systems, NVIDIA, Persistent Systems',
  authors: [{ name: 'Akshay Bankar' }],
  openGraph: {
    title: 'Akshay Bankar — Software Engineer',
    description: 'Software Engineer specializing in high-concurrency backend infrastructure and scalable AI solutions.',
    type: 'website',
    url: 'https://akshaybankar.dev',
    siteName: 'Akshay Bankar Portfolio',
  },
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}