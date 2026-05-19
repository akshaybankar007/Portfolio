import './globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export const metadata = {
  title: 'Akshay Bankar — Full Stack Developer',
  description: 'Akshay Bankar is a Full Stack Developer skilled in React.js, Next.js, Node.js, Express.js, MongoDB, REST APIs, and cloud deployment.',
  keywords: 'Akshay Bankar, Full Stack Developer, React Developer, Next.js Developer, Node.js Developer, Portfolio, JavaScript Developer, Nagpur Developer',
  authors: [{ name: 'Akshay Bankar' }],
  openGraph: {
    title: 'Akshay Bankar — Full Stack Developer',
    description: 'Full Stack Developer specializing in high-concurrency backend infrastructure and scalable AI solutions.',
    type: 'website',
    url: 'https://akshaybankar.dev',
    siteName: 'Akshay Bankar Portfolio',
    images: [
  {
    url: '/photo.png',
    width: 1200,
    height: 630,
    alt: 'Akshay Bankar Portfolio',
  },
],
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