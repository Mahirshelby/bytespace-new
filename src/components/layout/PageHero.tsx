import type { ReactNode } from 'react'
import Navbar from './Navbar'
import Container from '../ui/Container'

export default function PageHero({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <section className={`bg-grid relative text-white ${className}`}>
      <Navbar />
      <Container className="pb-14 pt-28">{children}</Container>
    </section>
  )
}