import type { ReactNode } from 'react'

type Props = { children: ReactNode; active?: boolean; filled?: boolean; onClick?: () => void }

export default function Pill({ children, active = false, filled = false, onClick }: Props) {
  const tone = active ? 'bg-lime text-[#242528]' : filled ? 'bg-[#F5F5F6] text-[#4B4C53] hover:bg-gray-200' : 'border border-[#D5D6DB] bg-white text-[#242528] hover:bg-gray-50'
  return (
    <button onClick={onClick} className={`flex h-[43px] cursor-pointer items-center gap-2 rounded-full px-5 text-label-s font-medium transition ${tone}`}>
      {children}
    </button>
  )
}