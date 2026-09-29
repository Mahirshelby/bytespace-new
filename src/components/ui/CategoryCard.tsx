import type { ReactNode } from 'react'

export default function CategoryCard({ icon, label }: { icon: ReactNode; label: string }) {
  return (
    <button className="flex h-28 w-full cursor-pointer flex-col items-center justify-center gap-3 rounded-2xl border border-gray-200 bg-white text-xs transition hover:-translate-y-0.5 hover:shadow-md">
      <span className="grid h-10 w-10 place-items-center rounded-full bg-lime text-ink">{icon}</span>
      {label}
    </button>
  )
}