import { Link } from 'react-router-dom'
import Container from '../ui/Container'

const links = [['Home', '/'], ['Courses', '/courses'], ['Creators', '/creator']]

export default function Navbar() {
  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <Container className="flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-lg font-semibold text-white">
          <span className="grid h-7 w-7 place-items-center rounded-md bg-lime font-bold text-primary">b</span>
          ByteSpace
        </Link>
        <nav className="hidden gap-8 text-label-s text-white md:flex">
          {links.map(([label, to]) => <Link key={label} to={to} className="opacity-90 hover:opacity-100">{label}</Link>)}
        </nav>
        <div className="flex items-center gap-5 text-label-s text-white">
          <Link to="/login" className="opacity-90 hover:opacity-100">Sign In</Link>
          <Link to="/register" className="opacity-90 hover:opacity-100">Join Us</Link>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 7h12l-1 13H7L6 7Z" /><path d="M9 7a3 3 0 0 1 6 0" /></svg>
        </div>
      </Container>
    </header>
  )
}