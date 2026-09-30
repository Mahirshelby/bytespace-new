import Container from '../ui/Container'
import CourseCard from '../ui/CourseCard'
import { courses } from '../../data/courses'

export default function CourseGrid() {
  return (
    <section className="bg-white pb-20">
      <Container className="max-w-[1100px]">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((c) => (
            <CourseCard key={c.id} course={c} />
          ))}
        </div>
      </Container>
    </section>
  )
}