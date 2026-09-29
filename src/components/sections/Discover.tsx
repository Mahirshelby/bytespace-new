import Container from '../ui/Container'
import CategoryChips from '../ui/CategoryChips'

export default function Discover() {
  return (
    <section className="bg-white py-16">
      <Container className="text-center">
        <h2 className="mx-auto max-w-md text-3xl font-semibold leading-tight sm:text-4xl">
          Discover Your Passion, Build Your Skills
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-xs text-gray-500">
          At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across
          different fields, from technology to the arts, and make a difference in your career and life.
        </p>
        <CategoryChips />
      </Container>
    </section>
  )
}