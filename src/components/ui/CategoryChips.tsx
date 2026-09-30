import { useState } from 'react'

const rows = [
  ['Featured', 'Music', 'Drawing & Painting', 'Marketing', 'Animation', 'Social Media', 'UI/UX Design', 'Creative Marketing'],
  ['Digital Illustration', 'Film & Video', 'Crafts', 'Freelance & Entrepreneurship', 'Graphic Design', 'Photography'],
  ['Productivity', 'Web Development', 'Data Science', 'Cooking'],
]

export default function CategoryChips() {
  const [active, setActive] = useState('Featured')

  return (
    <div className="mx-auto mt-8 flex max-w-4xl flex-col items-center gap-3">
      {rows.map((row, i) => (
        <div key={i} className="flex flex-wrap justify-center gap-3">
          {row.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`cursor-pointer rounded-full px-4 py-1.5 text-[11px] transition ${
                active === c ? 'bg-lime font-medium text-ink' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {c}
            </button>
          ))}
          {i === rows.length - 1 && (
            <button className="cursor-pointer px-2 py-1.5 text-[11px] font-medium text-primary">+ More</button>
          )}
        </div>
      ))}
    </div>
  )
}