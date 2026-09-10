import './globals.css'
import Footer from './Footer'

export const metadata = {
  title: 'Mạch nguồn | Lịch sử Việt Nam',
  description: 'Hành trình học lịch sử theo chương.',
}

export default function RootLayout({ children }) {
  return <html lang="vi"><body>{children}<Footer /></body></html>
}
