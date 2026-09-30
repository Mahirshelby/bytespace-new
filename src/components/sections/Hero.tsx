import Button from '../ui/Button'

const gridBg = {
  backgroundColor: '#003BE2',
  backgroundImage:
    'linear-gradient(to right, #1F53E6 0 2px, transparent 2px), linear-gradient(to bottom, #1F53E6 0 2px, transparent 2px)',
  backgroundSize: '120px 120px',
  backgroundPosition: 'calc(50% + 60px) 118px',
}

export default function Hero() {
  return (
    <section className="text-white" style={gridBg}>
      <div
        className="relative mx-auto min-h-[720px] max-w-[1440px] overflow-hidden bg-cover bg-bottom [container-type:inline-size] lg:aspect-[1440/1024] lg:min-h-0"
        style={{ backgroundImage: "url('/images/hero-bg.png')" }}
      >
        <div className="relative px-4 pt-32 text-center lg:absolute lg:inset-x-0 lg:top-[16.5%] lg:px-0 lg:pt-0">
          <h1 className="mx-auto max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl lg:max-w-none lg:text-[5cqw] lg:leading-[1.2]">
            Get Access to Hundreds
            <br className="hidden lg:block" /> Courses Available
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-xs sm:text-sm lg:mt-[2.4cqw] lg:max-w-none lg:text-[1.25cqw]">
            Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
          </p>
          <form
            className="mx-auto mt-8 flex max-w-md items-center gap-3 lg:mt-[4.2cqw] lg:max-w-none lg:justify-center lg:gap-[1.2cqw]"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="relative flex-1 lg:w-[32cqw] lg:flex-none">
              <svg className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <circle cx="11" cy="11" r="7" />
                <path d="m20 20-3.5-3.5" />
              </svg>
              <input
                placeholder="Course, topic, creator"
                className="h-10 w-full rounded-full bg-white pl-11 pr-5 text-xs text-ink outline-none lg:h-[3.6cqw] lg:text-[1.1cqw]"
              />
            </div>
            <Button type="submit" className="lg:h-[3.2cqw] lg:px-[2cqw] lg:text-[1.2cqw]">Search</Button>
          </form>
        </div>
      </div>
    </section>
  )
}