import { useState } from 'react'
import { Link } from 'react-router-dom'
import PageHero from '../components/layout/PageHero'
import Footer from '../components/layout/Footer'
import Container from '../components/ui/Container'
import Button from '../components/ui/Button'
import Pill from '../components/ui/Pill'
import { about, includes, keyPoints, lessonsPreview, modules, ratingBars, reviews } from '../data/courseDetail'

const tabs = ['About', 'Lessons', 'Reviews'] as const
type Tab = (typeof tabs)[number]

const Check = () => <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-primary text-[11px] text-white">&#10003;</span>
const Stars = () => <span className="tracking-widest text-[#4B4C53]">&#9733;&#9733;&#9733;&#9733;&#9733;</span>

export default function CourseDetail() {
  const [tab, setTab] = useState<Tab>('About')
  return (
    <>
      <PageHero className="lg:pb-0">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="text-2xl lg:text-heading-s">Build Digital Asset: A Comprehensive Guide</h1>
            <p className="mt-1 text-label-l font-medium">Unlock the Power of Digital Creation with Expert Guidance</p>
            <p className="mt-5 text-body-m">by <span className="text-lime">purepearl studio</span></p>
          </div>
          <Button className="h-10 shrink-0 px-5 text-label-s font-medium">Share</Button>
        </div>
        <div className="mt-4 flex flex-wrap gap-3">
          {['Intermediate', '\u2605 4.8 (172 reviews)', '199 Students'].map((t) => <span key={t} className="rounded-full bg-white px-4 py-2 text-label-s text-ink">{t}</span>)}
        </div>
        <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_390px] lg:items-start">
          <div className="relative overflow-hidden rounded-3xl bg-gray-200">
            <img src="/images/course-video.png" alt="Course preview" className="aspect-[681/454] w-full object-cover" />
            <button aria-label="Play" className="absolute left-1/2 top-1/2 grid h-14 w-14 -translate-x-1/2 -translate-y-1/2 cursor-pointer place-items-center rounded-2xl bg-black/40 text-white">&#9654;</button>
          </div>
          <aside className="rounded-3xl border border-[#D5D6DB] relative z-10 bg-white p-8 text-ink lg:-mb-[420px]">
            <h2 className="text-heading-xs">112 Lessons (24 hours)</h2>
            <ul className="mt-4 space-y-3 text-body-s">
              {lessonsPreview.map(([n, t, m]) => <li key={n} className="flex gap-3"><span>{n}</span><span className="flex-1">{t}</span><span className="text-[#003AE1]">{m}</span></li>)}
            </ul>
            <p className="mt-3 text-body-s text-[#4B4C53]">99 more videos</p>
            <p className="mt-6 text-body-s text-[#4B4C53]">Ready to Dive In? Enroll Now and Start Building Your Digital Future!</p>
            <p className="mt-4 text-heading-s text-primary">$25<span className="font-sans text-label-s font-normal text-[#4B4C53]">/lifetime</span></p>
            <Button className="mt-4 h-[46px] w-full text-label-m font-medium">Enroll Now</Button>
            <h3 className="mt-6 text-heading-xs">This course include</h3>
            <ul className="mt-3 space-y-3 text-body-s text-[#4B4C53]">{includes.map((i) => <li key={i} className="flex items-center gap-3"><Check />{i}</li>)}</ul>
            <div className="mt-6 flex items-center gap-3 border-t border-[#E0E1E4] pt-6">
              <img src="/images/creator.png" alt="" className="h-12 w-12 rounded-full object-cover" />
              <div><p className="text-label-m font-medium">PurePearl Studio</p><p className="text-body-xs text-[#4B4C53]">Professional Creator</p></div>
            </div>
            <p className="mt-4 text-body-s text-[#4B4C53]">Ready to Dive In? Enroll Now and Start Building Your Digital Future!</p>
            <Link to="/creator" className="mt-4 inline-flex h-10 items-center rounded-full border border-[#D5D6DB] px-5 text-label-s">See Full Profile</Link>
          </aside>
        </div>
      </PageHero>

      <main className="bg-white py-14">
        <Container>
          <div className="lg:max-w-[calc(100%-440px)]">
            <div className="flex gap-3">{tabs.map((t) => <Pill key={t} filled active={tab === t} onClick={() => setTab(t)}>{t}</Pill>)}</div>

            {tab === 'About' && (
              <section className="mt-8">
                <h2 className="text-heading-xs">Description</h2>
                <div className="mt-4 space-y-5 text-body-s text-[#4B4C53]">{about.map((p) => <p key={p}>{p}</p>)}</div>
                <h2 className="mt-8 text-heading-xs">Sneak Peak</h2>
                <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4">
                  {[1, 2, 3, 4].map((n) => <img key={n} src={`/images/sneak-${n}.png`} alt="" className="aspect-[4/3] w-full rounded-2xl bg-gray-200 object-cover" />)}
                </div>
                <h2 className="mt-8 text-heading-xs">Key Points</h2>
                <ul className="mt-4 space-y-3 text-body-s">{keyPoints.map((k) => <li key={k} className="flex items-center gap-3"><Check />{k}</li>)}</ul>
              </section>
            )}

            {tab === 'Lessons' && (
              <section className="mt-8">
                <h2 className="text-heading-xs">Explore the Modules</h2>
                <p className="mt-3 text-body-s text-[#4B4C53]">Immerse yourself in the course content as we break down each module into comprehensive lessons, providing practical insights and hands-on experiences.</p>
                <h3 className="mt-6 text-heading-xs">Lesson List</h3>
                <ul className="mt-4 space-y-5">
                  {modules.map(([t, d]) => (
                    <li key={t} className="flex gap-4">
                      <span className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-lime text-xl">&#127909;</span>
                      <div><p className="text-label-m font-medium">{t}</p><p className="text-body-s text-[#4B4C53]">{d}</p></div>
                    </li>
                  ))}
                </ul>
                <h3 className="mt-8 text-heading-xs">Lesson Progress Tracking</h3>
                <p className="mt-3 text-body-s text-[#4B4C53]">Witness your growth as you complete lessons, with an intuitive progress tracking feature guiding you through your learning journey.</p>
                <div className="mt-4 rounded-2xl border border-[#D5D6DB] p-4">
                  <p className="text-body-xs">Learning Progress</p>
                  <p className="font-heading text-3xl font-semibold">55%</p>
                  <div className="mt-2 h-1.5 rounded-full bg-gray-200"><div className="h-full w-[55%] rounded-full bg-lime" /></div>
                </div>
              </section>
            )}

            {tab === 'Reviews' && (
              <section className="mt-8">
                <h2 className="text-heading-xs">What Learners Are Saying</h2>
                <p className="mt-3 text-body-s text-[#4B4C53]">Discover what our learners have to say about their experience with &apos;Build Digital Assets: A Comprehensive Guide.&apos; Read reviews and ratings from individuals who have embarked on the transformative journey of mastering digital asset creation.</p>
                <div className="mt-6 flex flex-wrap items-center gap-6 rounded-2xl border border-[#D5D6DB] p-6">
                  <div className="grid h-[104px] w-24 place-items-center rounded-xl bg-lime text-center"><div><p className="text-body-xs">Ratings</p><p className="font-heading text-4xl font-semibold">4.7</p></div></div>
                  <div className="min-w-[240px] flex-1 space-y-2">
                    {ratingBars.map(([s, c, w]) => (
                      <div key={s} className="flex items-center gap-3 text-body-xs">
                        <div className="h-1.5 flex-1 rounded-full bg-gray-200"><div className="h-full rounded-full bg-lime" style={{ width: `${w}%` }} /></div>
                        <Stars /><span className="w-8 text-right">{c}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <h3 className="mt-8 text-heading-xs">Individual Reviews:</h3>
                <div className="mt-4 flex flex-wrap gap-3">
                  <Pill active>All rating</Pill>{[5, 4, 3, 2, 1].map((n) => <Pill key={n} filled>&#9733; {n}</Pill>)}
                </div>
                <div className="mt-6 space-y-5">
                  {reviews.map(([name, text], i) => (
                    <article key={name} className="rounded-2xl border border-[#D5D6DB] p-6">
                      <div className="flex items-center gap-3">
                        <img src={`/images/avatar-${(i % 3) + 1}.png`} alt="" className="h-10 w-10 rounded-full object-cover" />
                        <div className="flex-1"><p className="text-label-m font-medium">{name}</p><p className="text-body-xs text-[#4B4C53]">UI/UX Designer</p></div>
                        <span className="text-body-xs text-[#4B4C53]">a year ago</span>
                      </div>
                      <div className="mt-4"><Stars /></div>
                      <p className="mt-4 text-body-s text-[#4B4C53]">{text}</p>
                    </article>
                  ))}
                </div>
              </section>
            )}
          </div>
        </Container>
      </main>
      <Footer />
    </>
  )
}