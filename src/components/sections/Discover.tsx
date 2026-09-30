import Container from '../ui/Container'
import CategoryChips from '../ui/CategoryChips'

export default function Discover() {
  return (
    <section className="bg-white pb-10 pt-16">
      <Container className="text-center">
        <h2 className="text-3xl font-semibold leading-[1.3] text-ink sm:text-[40px]">
          Discover Your Passion,
          <br />
          Build Your Skills
        </h2>
        <p className="mx-auto mt-4 max-w-[917px] text-sm font-light leading-[1.8] text-[#808490] sm:text-base">
          At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across
          different fields, from technology to the arts, and make a difference in your career and life.
        </p>
        <CategoryChips />
      </Container>
    </section>
  )
}