import Container from '../ui/Container'
import TestimonialCard from '../ui/TestimonialCard'
import { testimonials } from '../../data/testimonials'

export default function Testimonials() {
  return (
    <section className="bg-soft py-20 lg:py-24">
      <Container className="max-w-[1204px]">
        <div className="grid items-center gap-8 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <h2 className="text-3xl text-ink lg:text-heading-m">Discover What Our<br />Community Is Saying</h2>
          <p className="text-body-m text-[#4B4C53] lg:text-body-l">
            At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly from those who have experienced the transformative journey of learning and creating on our platform. Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished creators.
          </p>
        </div>
        <div className="mt-16 grid items-start gap-6 md:grid-cols-3 lg:gap-[41px]">
          {testimonials.map((t) => <TestimonialCard key={t.name} t={t} />)}
        </div>
      </Container>
    </section>
  )
}