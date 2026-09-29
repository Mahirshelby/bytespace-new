import type { ButtonHTMLAttributes } from 'react'

type Props = ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'lime' | 'ghost' }

export default function Button({ variant = 'lime', className = '', ...props }: Props) {
  const styles =
    variant === 'lime'
      ? 'bg-lime text-ink hover:brightness-95'
      : 'text-white hover:text-lime'
  return (
    <button
      className={`rounded-full px-5 py-2 text-sm font-medium transition cursor-pointer ${styles} ${className}`}
      {...props}
    />
  )
}