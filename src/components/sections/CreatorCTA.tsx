import Container from '../ui/Container'
import Button from '../ui/Button'

export default function CreatorCTA() {
  return (
    <section className="bg-grid relative overflow-hidden py-24 text-white">
      <img src="/images/cta-squiggle-tl.png" alt="" className="absolute -left-8 -top-2 hidden w-52 md:block" />
      <img src="/images/cta-squiggle-small.png" alt="" className="absolute left-[12%] top-16 hidden w-20 md:block" />
      <img src="/images/cta-cone-l.png" alt="" className="absolute left-0 top-1/2 hidden w-24 md:block" />
      <img src="/images/cta-ring-bl.png" alt="" className="absolute -bottom-10 left-[8%] hidden w-44 md:block" />
      <img src="/images/cta-cone-tr.png" alt="" className="absolute right-[22%] top-6 hidden w-24 md:block" />
      <img src="/images/cta-cylinder-r.png" alt="" className="absolute -right-6 top-6 hidden w-44 md:block" />
      <img src="/images/cta-squiggle-br.png" alt="" className="absolute -bottom-6 right-[10%] hidden w-36 md:block" />

      <Container className="relative text-center">
        <h2 className="mx-auto max-w-xl text-3xl font-semibold leading-tight sm:text-4xl">
          Unlock Your Potential as a Creator with ByteSpace
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-xs leading-relaxed opacity-90">
          Experience the collaboration of numerous creators and an expanding selection of courses. Register now and
          become a part of a community comprising over 10,000 local and international creators. Utilize our Course
          Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.
        </p>
        <Button className="mt-8">Join as Creator</Button>
      </Container>
    </section>
  )
}