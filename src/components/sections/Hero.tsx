import Container from '../ui/Container'
import Button from '../ui/Button'

export default function Hero() {
  return (
    <section className="bg-grid relative overflow-hidden pt-32 text-white">
      {/* decorative shapes (images go in public/images) */}
      <img src="/images/shape-squiggle-left.png" alt="" className="absolute -left-10 top-24 hidden w-56 md:block" />
      <img src="/images/shape-cylinder-right.png" alt="" className="absolute -right-10 top-20 hidden w-56 md:block" />
      <img src="/images/shape-cone.png" alt="" className="absolute right-[15%] top-[52%] hidden w-24 md:block" />

      <Container className="relative text-center">
        <h1 className="mx-auto max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
          Get Access to Hundreds Courses Available
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-xs opacity-90 sm:text-sm">
          Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
        </p>

        <form className="mx-auto mt-10 flex max-w-md items-center gap-3" onSubmit={(e) => e.preventDefault()}>
          <input
            placeholder="Course, topic, creator"
            className="h-10 flex-1 rounded-full bg-white px-5 text-xs text-ink outline-none"
          />
          <Button type="submit">Search</Button>
        </form>

        {/* person + lime circle */}
        <div className="relative mx-auto mt-10 h-[340px] max-w-[760px] sm:h-[420px]">
          <div className="absolute inset-x-0 bottom-0 mx-auto h-[300px] w-[300px] rounded-t-full bg-lime sm:h-[380px] sm:w-[620px] sm:rounded-t-[310px]" />
          <img
            src="/images/hero-person.png"
            alt="Smiling student with laptop"
            className="absolute bottom-0 left-1/2 h-[320px] -translate-x-1/2 object-contain sm:h-[400px]"
          />

          <div className="absolute left-2 top-16 hidden rounded-xl bg-white px-4 py-2 text-left text-ink shadow sm:block">
            <p className="text-[11px] font-medium">UI/UX Design</p>
            <p className="text-[9px] opacity-60">200 Courses • 1000+ Students</p>
          </div>

          <div className="absolute right-0 top-14 hidden w-40 rounded-xl bg-white p-3 text-left text-ink shadow sm:block">
            <p className="text-[10px] opacity-70">Learning Progress</p>
            <p className="text-2xl font-semibold">55%</p>
            <div className="mt-1 h-1.5 w-full rounded-full bg-gray-200">
              <div className="h-full w-[55%] rounded-full bg-lime" />
            </div>
          </div>

          <div className="absolute bottom-10 left-0 hidden rounded-xl bg-white px-4 py-3 text-left text-ink shadow sm:block">
            <p className="text-[11px] font-medium">Happy Students</p>
            <p className="text-[9px] opacity-70">4.5 (240) ★</p>
            <span className="mt-1 inline-block rounded-full bg-lime px-2 py-0.5 text-[10px] font-medium">2K+</span>
          </div>
        </div>
      </Container>
    </section>
  )
}