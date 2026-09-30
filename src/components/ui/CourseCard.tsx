import type { Course } from '../../data/courses'

// Card photos, badges and avatars are cut from one exported sheet (Frame 8) with CSS
const SHEET = '/images/frame-8.png'
const photos = [[16, 16], [429, 16], [842, 16], [16, 440], [429, 440], [842, 440]]

export default function CourseCard({ course }: { course: Course }) {
  const [x, y] = photos[(course.id - 1) % photos.length]
  return (
    <article className="rounded-[20px] border border-[#D5D6DB] bg-white p-4">
      <div
        role="img"
        aria-label={course.title}
        className="aspect-[341/195] w-full rounded-2xl bg-gray-200"
        style={{
          backgroundImage: `url(${SHEET})`,
          backgroundSize: `${(1199 / 341) * 100}% auto`,
          backgroundPosition: `${(x / 858) * 100}% ${(y / 613) * 100}%`,
        }}
      />
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
        <span
          aria-hidden
          className="block h-9 w-[132px]"
          style={{ backgroundImage: `url(${SHEET})`, backgroundSize: '1199px auto', backgroundPosition: '-124px -290px' }}
        />
      </div>
      <p className="mt-4 text-heading-xs text-primary">${course.price}<span className="font-sans text-label-s font-normal text-[#4B4C53]">/lifetime</span></p>
    </article>
  )
}