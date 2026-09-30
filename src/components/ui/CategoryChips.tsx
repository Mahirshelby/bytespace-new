import { useState } from 'react'

const rows = [
  ['Featured', 'Music', 'Drawing & Painting', 'Marketing', 'Animation', 'Social Media', 'UI/UX Design', 'Creative Marketing'],
  ['Digital Illustration', 'Film & Video', 'Crafts', 'Freelance & Entrepreneurship', 'Graphic Design', 'Photography'],
  ['Productivity', 'Web Development', 'Data Science', 'Cooking'],
]

export default function CategoryChips() {
  const [active, setActive] = useState('Featured')

  return (
    <div className="mx-auto mt-12 flex max-w-[1100px] flex-col items-center gap-5">
      {rows.map((row, i) => (
        <div key={i} className="flex flex-wrap justify-center gap-4">
          {row.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`flex h-[43px] cursor-pointer items-center rounded-full px-[18px] text-sm transition ${
                active === c
                  ? 'bg-lime text-[#242528]'
                  : 'bg-[#F5F5F6] text-[#4B4C53] hover:bg-gray-200'
              }`}
            >
              {c}
            </button>
          ))}
          {i === rows.length - 1 && (
            <button className="flex h-[43px] cursor-pointer items-center px-1 text-sm font-medium text-[#003AE1]">
              + More
            </button>
          )}
        </div>
      ))}
    </div>
  )
}