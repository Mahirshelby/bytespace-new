import type { CSSProperties, ReactNode } from 'react'
import { Link } from 'react-router-dom'

const cq = (n: number) => `${n / 14.4}cqw`
const textPos = { '--l': cq(122), '--t': cq(120), '--w': cq(480) } as CSSProperties

type Props = { heading: string; text: string; kicker: string; title: ReactNode; children: ReactNode; footer: ReactNode }

export default function AuthLayout({ heading, text, kicker, title, children, footer }: Props) {
  return (
    <main className="bg-grid text-white">
      <div className="relative mx-auto max-w-[1440px] px-4 py-10 [container-type:inline-size] lg:min-h-[min(71.12vw,1024px)] lg:p-0">
        <img src="/images/auth-bg.png" alt="" className="absolute inset-0 hidden h-full w-full object-cover object-left-top lg:block" />
        <Link to="/" aria-label="Home" className="mb-8 inline-grid h-9 w-9 place-items-center rounded-lg bg-lime text-lg font-bold text-primary lg:hidden">b</Link>

        <div className="relative lg:absolute lg:left-[var(--l)] lg:top-[var(--t)] lg:w-[var(--w)]" style={textPos}>
          <h2 className="text-heading-xs">{heading}</h2>
          <p className="mt-3 text-body-m lg:text-body-l">{text}</p>
        </div>

        <section className="relative mt-8 flex flex-col rounded-3xl bg-white p-6 text-ink lg:ml-[51.46cqw] lg:mb-[8.33cqw] lg:mt-[8.33cqw] lg:min-h-[54.4cqw] lg:w-[40.2cqw] lg:rounded-[28px] lg:px-16 lg:pb-9 lg:pt-16">
          <p className="text-body-m text-primary lg:text-body-l">{kicker}</p>
          <h1 className="text-heading-s leading-tight lg:text-heading-m">{title}</h1>
          <div className="mt-8 flex-1 lg:mt-[38px]">{children}</div>
          <p className="mt-8 text-center text-body-m text-[#4B4C53] lg:text-body-l">{footer}</p>
        </section>
      </div>
    </main>
  )
}