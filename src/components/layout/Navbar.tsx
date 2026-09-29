import Container from '../ui/Container'

const links = ['Home', 'Courses', 'Creators']

export default function Navbar() {
  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <Container className="flex h-20 items-center justify-between">
        <a href="#" className="flex items-center gap-2 text-lg font-semibold text-white">
          <span className="grid h-7 w-7 place-items-center rounded-md bg-lime font-bold text-primary">b</span>
          ByteSpace
        </a>

        <nav className="hidden gap-8 text-xs text-white md:flex">
          {links.map((l, i) => (
            <a key={l} href="#" className={i === 0 ? 'font-medium' : 'opacity-80 hover:opacity-100'}>
              {l}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-5 text-xs text-white">
          <a href="#" className="opacity-80 hover:opacity-100">Sign In</a>
          <a href="#" className="opacity-80 hover:opacity-100">Join Us</a>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 7h12l-1 13H7L6 7Z" /><path d="M9 7a3 3 0 0 1 6 0" />
          </svg>
        </div>
      </Container>
    </header>
  )
}