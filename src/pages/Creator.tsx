import PageHero from '../components/layout/PageHero'
import Footer from '../components/layout/Footer'
import Container from '../components/ui/Container'
import CourseCard from '../components/ui/CourseCard'
import Button from '../components/ui/Button'
import Pill from '../components/ui/Pill'
import { courses } from '../data/courses'

export default function Creator() {
  return (
    <>
      <PageHero>
        <div className="flex items-center gap-5">
          <img src="/images/creator.png" alt="PurePearl Studio" className="h-24 w-24 rounded-2xl bg-pink-200 object-cover" />
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <h1 className="text-heading-s lg:text-heading-m">PurePearl Studio</h1>
              <span className="rounded-full bg-lime px-4 py-1 text-label-s font-medium text-ink">Creator</span>
            </div>
            <p className="mt-1 text-body-m lg:text-body-l">Passionate UI/UX, Web designer</p>
          </div>
        </div>
        <p className="mt-10 max-w-[1200px] text-body-m lg:text-body-l">
          Welcome to the creative world of [Creator&apos;s Name]. Here, you&apos;ll discover the passion, expertise, and inspiration that drive my creative journey. Let&apos;s explore and learn together!
          <br />
          Dive into my creative portfolio, showcasing a glimpse of my artistic endeavors. From digital designs to multimedia projects, each piece tells a unique story. Explore the world of creativity with me.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-between gap-4">
          <div className="flex gap-4">
            {['3 Products', '12 Followers'].map((t) => <span key={t} className="rounded-full bg-white px-6 py-3 text-label-m text-[#003BE2]">{t}</span>)}
          </div>
          <Button className="h-[46px] px-8 text-label-m font-medium">Follow</Button>
        </div>
      </PageHero>
      <main className="bg-white py-12">
        <Container className="max-w-[1199px]">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap gap-3"><Pill>Filter</Pill><Pill>Level</Pill><Pill>Category</Pill></div>
            <Pill>Most relevant</Pill>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-10 lg:gap-y-[41px]">
            {courses.map((c) => <CourseCard key={c.id} course={c} />)}
          </div>
        </Container>
      </main>
      <Footer />
    </>
  )
}