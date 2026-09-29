import type { Testimonial } from '../../data/testimonials'

export default function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <article className="rounded-2xl bg-white p-6 shadow-sm">
      <img src={t.avatar} alt={t.name} className="h-14 w-14 rounded-full bg-gray-200 object-cover" />
      <h3 className="mt-4 text-sm font-semibold">{t.name}</h3>
      <p className="text-[11px] text-primary">{t.role}</p>
      <p className="mt-4 text-[11px] leading-relaxed text-gray-500">{t.quote}</p>
    </article>
  )
}