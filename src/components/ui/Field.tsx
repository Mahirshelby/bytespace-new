import type { InputHTMLAttributes } from 'react'

export default function Field({ label, ...props }: { label: string } & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="block">
      <span className="text-label-s font-medium text-[#242528]">{label}</span>
      <input
        {...props}
        className="mt-2 h-[52px] w-full rounded-2xl border border-[#D5D6DB] bg-[#FBFBFB] px-6 text-body-m outline-none transition placeholder:text-[#9A9CA3] focus:border-primary lg:text-body-l"
      />
    </label>
  )
}