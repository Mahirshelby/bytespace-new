import type { ReactNode } from 'react'

const s = { width: 18, height: 18, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const }

export type Category = { label: string; icon: ReactNode }

export const categories: Category[] = [
  { label: 'Design', icon: <svg {...s}><path d="m12 19 7-7 3 3-7 7-3-3Z" /><path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5Z" /></svg> },
  { label: 'Development', icon: <svg {...s}><path d="m16 18 6-6-6-6" /><path d="m8 6-6 6 6 6" /></svg> },
  { label: 'IT & Software', icon: <svg {...s}><rect x="3" y="4" width="18" height="12" rx="2" /><path d="M2 20h20" /></svg> },
  { label: 'Business', icon: <svg {...s}><rect x="4" y="3" width="16" height="18" rx="1" /><path d="M9 8h2M13 8h2M9 12h2M13 12h2M9 16h6" /></svg> },
  { label: 'Marketing', icon: <svg {...s}><path d="m3 11 18-5v12L3 14v-3Z" /><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" /></svg> },
  { label: 'Photography', icon: <svg {...s}><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3Z" /><circle cx="12" cy="13" r="3" /></svg> },
]