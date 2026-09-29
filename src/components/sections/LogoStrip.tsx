import Container from '../ui/Container'

const brands = ['Logoipsum', 'Logoipsum', 'Logoipsum', 'Logoipsum', 'Logoipsum']

export default function LogoStrip() {
  return (
    <section className="bg-gray-100 py-10">
      <Container className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 text-gray-500">
        {brands.map((b, i) => (
          <div key={i} className="flex items-center gap-2 text-base font-semibold">
            <span className="h-6 w-6 rounded-full border-4 border-gray-400" />
            {b}
          </div>
        ))}
      </Container>
    </section>
  )
}