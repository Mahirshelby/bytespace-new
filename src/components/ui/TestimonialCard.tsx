import type { Testimonial } from '../../data/testimonials'

export default function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <article className="rounded-3xl bg-white p-6">
      <img src={t.avatar} alt={t.name} className="h-20 w-20 rounded-full" />
      <h3 className="mt-5 text-heading-xs">{t.name}</h3>
      <p className="mt-0.5 text-body-m text-[#003BE2]">{t.role}</p>
      <p className="mt-5 text-body-l text-[#4B4C53]">{t.quote}</p>
    </article>
  )
}