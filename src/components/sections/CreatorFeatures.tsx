import Container from '../ui/Container'

const points = ['Share Your Expertise', 'Monetize Your Passion', 'Flexibility and Autonomy', 'Build a Community']

function CheckIcon() {
  return (
    <span className="grid h-4 w-4 place-items-center rounded-full bg-primary text-white">
      <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 6 9 17l-5-5" />
      </svg>
    </span>
  )
}

export default function CreatorFeatures() {
  return (
    <section className="py-20">
      <Container className="grid max-w-[1100px] items-center gap-12 lg:grid-cols-2">
        <div className="relative mx-auto h-[440px] w-full max-w-[420px]">
          <img
            src="/images/creator-person.png"
            alt="Creator smiling with tablet"
            className="absolute bottom-0 left-1/2 h-[420px] -translate-x-1/2 object-contain"
          />

          <div className="absolute left-0 top-4 w-40 rounded-xl bg-primary p-3 text-white shadow">
            <p className="text-[10px]">Total Revenue</p>
            <p className="text-[8px] opacity-70">July 1-28</p>
            <p className="mt-1 text-lg font-semibold">$120.29</p>
            <div className="mt-1 h-1 w-full rounded-full bg-white/30">
              <div className="h-full w-3/4 rounded-full bg-lime" />
            </div>
          </div>

          <div className="absolute left-0 top-32 w-36 rounded-xl bg-primary p-3 text-white shadow">
            <p className="text-[10px]">Year to Date</p>
            <p className="text-[8px] opacity-70">2023</p>
            <p className="mt-1 text-lg font-semibold">$1,200.38</p>
            <span className="mt-1 inline-block rounded-full bg-lime px-2 py-0.5 text-[8px] font-medium text-ink">+12$</span>
          </div>

          <div className="absolute -bottom-2 left-24 rounded-xl bg-white px-4 py-3 shadow">
            <p className="text-[11px] font-medium">Happy Students</p>
            <p className="text-[9px] text-gray-500">4.5 (240) ★</p>
            <span className="mt-1 inline-block rounded-full bg-lime px-2 py-0.5 text-[10px] font-medium">2K+</span>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">
            Create &amp; Manage
            <br />
            Courses Easily.
          </h2>
          <p className="mt-6 max-w-md text-xs leading-relaxed text-gray-600">
            <span className="font-semibold text-ink">ByteSpace</span> supports individuals or entities in the creation,
            publication, and administration of educational courses.
          </p>
          <ul className="mt-8 space-y-3">
            {points.map((p) => (
              <li key={p} className="flex items-center gap-3 text-xs">
                <CheckIcon />
                {p}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  )
}