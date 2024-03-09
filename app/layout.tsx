import StoreProvider from './StoreProvider'
import '@/styles/globals.css'

import { ToastContainer } from 'react-toastify'
import NextNProgress from 'nextjs-progressbar'
import 'react-toastify/dist/ReactToastify.css'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <StoreProvider>
      <html lang="ru">
        <body>
          {/* <Header /> */}
          {/* <NextNProgress /> */}
          {children}
          {/* <Footer /> */}
          <ToastContainer
            position="bottom-right"
            hideProgressBar={false}
            closeOnClick
            rtl={false}
            limit={1}
            theme="light"
          />
          {/* <div className="overlay" /> */}
        </body>
      </html>
    </StoreProvider>
  )
}
