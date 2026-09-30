const stats = [['12K', 'Students'], ['70+', 'Courses'], ['16', 'Creators']]
const points = ['Share Your Expertise', 'Monetize Your Passion', 'Flexibility and Autonomy', 'Build a Community']
const pos = (x: number, y: number, w: number) =>
  ({ '--l': `${x / 14.4}cqw`, '--t': `${y / 14.4}cqw`, '--w': `${w / 14.4}cqw` }) as React.CSSProperties
const place = 'lg:absolute lg:left-[var(--l)] lg:top-[var(--t)] lg:w-[var(--w)]'

export default function GrowthCreator() {
  return (
    <section className="bg-soft lg:bg-none">
      <div className="relative mx-auto max-w-[1440px] px-4 py-12 [container-type:inline-size] lg:p-0 lg:text-[1.25cqw]">
        <img src="/images/growth-creator-bg.png" alt="" className="hidden w-full lg:block" />

        <div className={place} style={pos(121, 190, 600)}>
          <h2 className="text-3xl text-[#242528] lg:text-[2.444em]">Your Path to Professional<br />Growth Starts Here!</h2>
        </div>
        <p className={`mt-4 text-body-m text-[#4B4C53] ${place} lg:text-[1em]`} style={pos(121, 341, 490)}>
          Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need.
        </p>
        <div className={`mt-8 flex gap-12 ${place} lg:gap-[3.2em]`} style={pos(121, 522, 500)}>
          {stats.map(([v, l]) => (
            <div key={l}><p className="font-heading text-3xl font-medium text-primary lg:text-[2em] lg:leading-[1.2]">{v}</p><p className="text-body-m text-[#4B4C53] lg:text-[1em]">{l}</p></div>
          ))}
        </div>
        <img src="/images/growth-visual.png" alt="Student with laptop" className="my-10 w-full max-w-md rounded-2xl lg:hidden" />

        <img src="/images/creator-visual.png" alt="Creator with tablet" className="my-10 w-full max-w-md rounded-2xl lg:hidden" />
        <div className={place} style={pos(741, 850, 600)}>
          <h2 className="text-3xl text-[#242528] lg:text-[2.444em]">Create &amp; Manage<br />Courses Easily.</h2>
        </div>
        <p className={`mt-4 text-body-m text-[#4B4C53] ${place} lg:text-[1em]`} style={pos(741, 998, 570)}>
          <b className="text-ink">ByteSpace</b> supports individuals or entities in the creation, publication, and administration of educational courses.
        </p>
        <ul className={`mt-6 space-y-2 ${place} lg:space-y-[0.55em]`} style={pos(743, 1090, 400)}>
          {points.map((p) => (
            <li key={p} className="flex items-center gap-3 text-body-m text-ink lg:text-[1em]">
              <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-primary text-white">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
              </span>{p}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}