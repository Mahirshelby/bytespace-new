import type { Course } from '../../data/courses'

const avatarColors = ['bg-amber-700', 'bg-rose-400', 'bg-yellow-500', 'bg-slate-700']

export default function CourseCard({ course }: { course: Course }) {
  const badges = [`${course.lessons} Lessons`, course.duration, `${course.comments} Comments`]

  return (
    <article className="rounded-2xl border border-gray-200 bg-white p-2.5">
      <div className="relative h-40 overflow-hidden rounded-xl bg-gray-200">
        <img src={course.image} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-x-2 bottom-2 flex flex-wrap gap-1.5">
          {badges.map((b) => (
            <span key={b} className="rounded-full bg-gray-500/50 px-2 py-0.5 text-[9px] text-white">
              {b}
            </span>
          ))}
        </div>
      </div>

      <div className="px-1.5 pb-1 pt-3">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-sm font-semibold leading-tight">{course.title}</h3>
          <span className="shrink-0 text-xs text-gray-500">
            {course.rating} <span className="text-gray-300">★</span>
          </span>
        </div>
        <p className="mt-0.5 text-[9px] text-gray-500">
          by <span className="text-primary">{course.author}</span>
        </p>

        <div className="mt-3 flex items-center gap-3">
          <span className="flex items-center gap-1.5 rounded-full bg-gray-100 px-2.5 py-1 text-[10px] text-gray-600">
            <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor">
              <rect x="0" y="6" width="2" height="4" /><rect x="4" y="3" width="2" height="7" /><rect x="8" y="0" width="2" height="10" />
            </svg>
            {course.level}
          </span>
          <div className="flex items-center">
            {avatarColors.map((c, i) => (
              <span key={i} className={`-ml-1.5 h-5 w-5 rounded-full border-2 border-white first:ml-0 ${c}`} />
            ))}
            <span className="-ml-1.5 grid h-5 min-w-5 place-items-center rounded-full border-2 border-white bg-lime px-1 text-[8px] font-medium">
              26+
            </span>
          </div>
        </div>

        <p className="mt-3 text-sm font-semibold text-primary">
          ${course.price}
          <span className="text-[9px] font-normal text-gray-500">/lifetime</span>
        </p>
      </div>
    </article>
  )
}