import type { Metadata } from 'next'
import Header from '@/components/modules/Header/Header'
import Footer from '@/components/modules/Footer/Footer'


export const metadata: Metadata = {
  title: 'Аква Термикс',
  description: 'Магазин крутых деталей',
}

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return (
    <section>
      <Header />
      {children}
      <Footer />
      <div className="overlay" />
    </section>
  )
}
