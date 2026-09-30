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
    <footer className="bg-white pt-16">
      <Container className="max-w-[1100px]">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <a href="#" className="flex items-center gap-2 text-lg font-semibold">
              <span className="grid h-7 w-7 place-items-center rounded-md bg-lime font-bold text-primary">b</span>
              ByteSpace
            </a>
            <p className="mt-3 text-[11px] text-gray-500">
              Stay Up to date with our latest features and releases by joining our newsletter.
            </p>
            <form className="mt-8 flex max-w-sm items-center gap-3" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email"
                className="h-10 flex-1 rounded-full border border-gray-200 px-5 text-[11px] outline-none focus:border-primary"
              />
              <Button type="submit">Search</Button>
            </form>
            <p className="mt-3 max-w-sm text-[9px] leading-relaxed text-gray-400">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {columns.map((col, i) => (
              <ul key={i} className="space-y-3">
                {col.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-[10px] text-gray-600 hover:text-primary">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>

        <div className="mt-20 flex flex-col items-center justify-between gap-4 border-t border-gray-200 py-6 text-[9px] text-gray-500 sm:flex-row">
          <p>&copy; 2023 ByteSpace. All rights reserved.</p>
          <div className="flex gap-6">
            {legal.map((l) => (
              <a key={l} href="#" className="hover:text-primary">
                {l}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  )
}