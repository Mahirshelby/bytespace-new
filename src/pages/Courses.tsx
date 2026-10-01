import { useState } from 'react'
import PageHero from '../components/layout/PageHero'
import Footer from '../components/layout/Footer'
import Container from '../components/ui/Container'
import CourseCard from '../components/ui/CourseCard'
import Button from '../components/ui/Button'
import Pill from '../components/ui/Pill'
import { courses } from '../data/courses'

const chips = ['Featured', 'Music', 'Drawing & Painting', 'Marketing', 'Animation', 'Social Media', 'UI/UX Design', 'Creative Marketing', 'Cooking']
const list = [...courses, ...courses, ...courses]

export default function Courses() {
  const [active, setActive] = useState('Featured')
  const [page, setPage] = useState(1)
  return (
    <>
      <PageHero className="text-center">
        <h1 className="text-heading-s lg:text-heading-m">Find Your Next Course</h1>
        <form className="mx-auto mt-6 flex max-w-[640px] gap-3" onSubmit={(e) => e.preventDefault()}>
          <input placeholder="Search" className="h-11 flex-1 rounded-full bg-white px-5 text-body-s text-ink outline-none" />
          <Button type="submit" className="h-11 px-6 text-label-s">Courses &#9662;</Button>
        </form>
      </PageHero>
      <main className="bg-white py-12">
        <Container className="max-w-[1199px]">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap gap-3"><Pill>Filter</Pill><Pill>Level</Pill><Pill>Category</Pill></div>
            <Pill>Most relevant</Pill>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            {chips.map((c) => <Pill key={c} filled active={active === c} onClick={() => setActive(c)}>{c}</Pill>)}
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-10 lg:gap-y-[41px]">
            {list.map((c, i) => <CourseCard key={i} course={c} />)}
          </div>
          <nav className="mt-14 flex items-center justify-center gap-5 text-label-m">
            <button aria-label="Previous" onClick={() => setPage((p) => Math.max(1, p - 1))} className="grid h-11 w-11 cursor-pointer place-items-center rounded-full border border-[#D5D6DB]">&lsaquo;</button>
            {[1, 2, 3, 4, 5].map((n) => (
              <button key={n} onClick={() => setPage(n)} className={`cursor-pointer ${page === n ? 'font-semibold text-primary' : 'text-[#4B4C53]'}`}>{n}</button>
            ))}
            <button aria-label="Next" onClick={() => setPage((p) => Math.min(5, p + 1))} className="grid h-11 w-11 cursor-pointer place-items-center rounded-full border border-[#D5D6DB]">&rsaquo;</button>
          </nav>
        </Container>
      </main>
      <Footer />
    </>
  )
}