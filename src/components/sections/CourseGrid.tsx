import Container from '../ui/Container'
import CourseCard from '../ui/CourseCard'
import { courses } from '../../data/courses'

export default function CourseGrid() {
  return (
    <section className="bg-white pb-16">
      <Container className="max-w-[1199px]">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-10 lg:gap-y-[41px]">
          {courses.map((c) => <CourseCard key={c.id} course={c} />)}
        </div>
      </Container>
    </section>
  )
}