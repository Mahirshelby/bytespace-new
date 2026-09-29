import Container from '../ui/Container'
import TestimonialCard from '../ui/TestimonialCard'
import { testimonials } from '../../data/testimonials'

export default function Testimonials() {
  return (
    <section className="bg-gradient-to-br from-white via-white to-lime/30 py-20">
      <Container className="max-w-[1100px]">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">
            Discover What Our
            <br />
            Community Is Saying
          </h2>
          <p className="text-xs leading-relaxed text-gray-600">
            At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly
            from those who have experienced the transformative journey of learning and creating on our platform.
            Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished
            creators.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} t={t} />
          ))}
        </div>
      </Container>
    </section>
  )
}