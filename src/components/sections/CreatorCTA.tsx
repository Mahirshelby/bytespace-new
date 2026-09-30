import Button from '../ui/Button'

export default function CreatorCTA() {
  return (
    <section className="bg-grid text-white">
      <div className="relative mx-auto max-w-[1440px] px-4 py-20 text-center [container-type:inline-size] lg:p-0 lg:text-[1.25cqw]">
        <img src="/images/cta-bg.png" alt="" className="hidden w-full lg:block" />
        <div className="lg:absolute lg:inset-x-0 lg:top-[5.9cqw]">
          <h2 className="mx-auto max-w-xl text-3xl lg:max-w-[40em] lg:text-[2.444em]">Unlock Your Potential as a<br className="hidden lg:block" /> Creator with ByteSpace</h2>
          <p className="mx-auto mt-6 max-w-2xl text-body-m lg:mt-[2.6em] lg:max-w-[52em] lg:text-[1em]">
            Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.
          </p>
          <Button className="mt-8 h-[46px] px-7 text-label-m font-medium lg:mt-[2.6em]">Join as Creator</Button>
        </div>
      </div>
    </section>
  )
}