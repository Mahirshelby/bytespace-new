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

        <img
          src="/images/growth-visual.png"
          alt="Student with a laptop, a course card and a learning progress card"
          className="mx-auto w-full max-w-[520px]"
        />
      </Container>
    </section>
  )
}