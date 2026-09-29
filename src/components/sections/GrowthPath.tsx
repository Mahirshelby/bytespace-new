import Container from '../ui/Container'

const stats = [
  { value: '12K', label: 'Students' },
  { value: '70+', label: 'Courses' },
  { value: '16', label: 'Creators' },
]

export default function GrowthPath() {
  return (
    <section className="py-20">
      <Container className="grid max-w-[1100px] items-center gap-12 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">
            Your Path to Professional
            <br />
            Growth Starts Here!
          </h2>
          <p className="mt-6 max-w-md text-xs leading-relaxed text-gray-600">
            Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career
            journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new
            career path entirely, we have the resources you need.
          </p>
          <div className="mt-10 flex gap-10">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="text-2xl font-semibold text-primary">{s.value}</p>
                <p className="mt-1 text-[11px] text-gray-500">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto h-[400px] w-full max-w-[460px]">
          <div className="absolute left-0 top-0 w-64 rounded-2xl border border-gray-200 bg-white p-2.5 shadow-sm">
            <img src="/images/course-1.png" alt="" className="h-36 w-full rounded-xl bg-gray-200 object-cover" />
            <p className="mt-3 px-1 text-xs font-semibold">Learn Figma from Basic</p>
            <p className="px-1 text-[9px] text-gray-500">
              by <span className="text-primary">purepearl studio</span>
            </p>
            <p className="mt-2 px-1 text-xs font-semibold text-primary">$25</p>
          </div>

          <img
            src="/images/growth-person.png"
            alt="Student smiling with laptop"
            className="absolute bottom-0 right-0 h-[360px] object-contain"
          />

          <div className="absolute right-0 top-24 w-36 rounded-xl bg-white p-3 shadow">
            <p className="text-[10px] text-gray-500">Learning Progress</p>
            <p className="text-2xl font-semibold">55%</p>
            <div className="mt-1 h-1.5 w-full rounded-full bg-gray-200">
              <div className="h-full w-[55%] rounded-full bg-lime" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}