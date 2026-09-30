import type { ReactNode } from 'react'

export default function CategoryCard({ icon, label }: { icon: ReactNode; label: string }) {
  return (
    <button className="flex h-[166px] w-full cursor-pointer flex-col items-center justify-center gap-4 rounded-3xl border border-[#D5D6DB] bg-white text-label-l font-medium transition hover:-translate-y-0.5 hover:shadow-md">
      <span className="grid h-[61px] w-[61px] place-items-center rounded-full bg-lime text-ink [&_svg]:h-7 [&_svg]:w-7">{icon}</span>
      {label}
    </button>
  )
}