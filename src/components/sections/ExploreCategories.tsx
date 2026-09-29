import Container from '../ui/Container'
import CategoryCard from '../ui/CategoryCard'
import { categories } from '../../data/categories'

export default function ExploreCategories() {
  return (
    <section className="bg-white pb-24 pt-8">
      <Container className="max-w-[1100px] text-center">
        <h2 className="text-2xl font-semibold sm:text-3xl">Explore Diverse Learning Paths at Bytespace</h2>
        <p className="mx-auto mt-4 max-w-2xl text-xs leading-relaxed text-gray-500">
          At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans
          various fields, ensuring there&apos;s something for everyone. Unleash your potential and explore our carefully
          curated categories.
        </p>
        <div className="mt-12 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6">
          {categories.map((c) => (
            <CategoryCard key={c.label} icon={c.icon} label={c.label} />
          ))}
        </div>
      </Container>
    </section>
  )
}