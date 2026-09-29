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
        <img
          src="/images/creator-visual.png"
          alt="Creator with a tablet, revenue cards and happy students card"
          className="mx-auto w-full max-w-[520px]"
        />

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