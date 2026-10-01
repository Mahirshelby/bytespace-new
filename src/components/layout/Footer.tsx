import { Link } from 'react-router-dom'
import Container from '../ui/Container'
import Button from '../ui/Button'

const columns = [
  ['Featured Courses', 'Featured Categories', 'Business', 'IT', 'Design'],
  ['Development', 'Marketing', 'Photography', 'Finance', 'Sport'],
  ['Become a Creator', 'Affiliate Program', 'Contact', 'Help', 'About'],
]
const legal = ['Privacy Policy', 'Terms of Service', 'Cookies Settings']

export default function Footer() {
  return (
    <footer className="border-t border-[#E0E1E4] bg-white">
      <Container className="pt-12 lg:pt-[71px]">
        <div className="grid gap-10 lg:grid-cols-[620px_1fr]">
          <div>
            <Link to="/" className="flex items-center gap-2 font-heading text-xl font-bold text-[#242528]">
              <span className="grid h-7 w-7 place-items-center rounded-md bg-lime text-primary">b</span>
              ByteSpace
            </Link>
            <p className="mt-[18px] text-body-s text-[#242528]">Stay Up to date with our latest features and releases by joining our newsletter.</p>
            <form className="mt-8 flex max-w-[520px] items-center gap-4 lg:mt-[45px] lg:gap-6" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email"
                className="h-[52px] min-w-0 flex-1 rounded-full border border-[#CED0D3] px-6 text-body-m text-ink outline-none focus:border-primary lg:max-w-[376px]"
              />
              <Button type="submit" className="h-[46px] shrink-0 px-7 text-label-m font-medium">Search</Button>
            </form>
            <p className="mt-6 max-w-[480px] text-body-xs text-[#242528]">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 lg:grid-cols-[207px_207px_1fr] lg:gap-x-0">
            {columns.map((col, i) => (
              <ul key={i} className="space-y-4">
                {col.map((item) => (
                  <li key={item}><a href="#" className="text-body-s text-[#242528] hover:text-primary">{item}</a></li>
                ))}
              </ul>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-[#E0E1E4] pb-12 pt-[22px] text-body-xs text-[#242528] sm:flex-row lg:mt-[129px]">
          <p>@ 2023 ByteSpace. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-6">
            {legal.map((l) => <a key={l} href="#" className="hover:text-primary">{l}</a>)}
          </div>
        </div>
      </Container>
    </footer>
  )
}