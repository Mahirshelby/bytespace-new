import type { Course } from '../../data/courses'

export default function CourseCard({ course }: { course: Course }) {
  return (
    <article className="rounded-[20px] border border-[#D5D6DB] bg-white p-4">
      <img src={course.image} alt={course.title} className="h-[195px] w-full rounded-2xl bg-gray-200 object-cover" />
      <div className="mt-4 flex items-start justify-between gap-2">
        <h3 className="min-w-0 truncate text-heading-xs">{course.title}</h3>
        <span className="shrink-0 text-label-m text-[#4B4C53]">{course.rating} <span className="text-gray-300">★</span></span>
      </div>
      <p className="text-body-xs text-primary">by {course.author}</p>
      <div className="mt-4 flex items-center gap-3">
        <span className="flex h-[33px] items-center gap-2 rounded-full bg-[#F5F5F6] px-4 text-label-s font-medium text-[#4B4C53]">
          <svg width="12" height="12" viewBox="0 0 10 10" fill="currentColor"><rect y="6" width="2" height="4" /><rect x="4" y="3" width="2" height="7" /><rect x="8" width="2" height="10" /></svg>
          {course.level}
        </span>
        <img src="/images/avatar-stack.png" alt="" className="h-9" />
      </div>
      <p className="mt-4 text-heading-xs text-primary">${course.price}<span className="font-sans text-label-s font-normal text-[#4B4C53]">/lifetime</span></p>
    </article>
  )
}