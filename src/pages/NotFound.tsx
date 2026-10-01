import { Link } from 'react-router-dom'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'

export default function NotFound() {
  return (
    <>
      <Navbar />
      <section className="bg-grid text-white">
        <div className="relative mx-auto max-w-[1440px] px-4 pb-24 pt-32 text-center [container-type:inline-size] lg:p-0 lg:text-[1.25cqw]">
          <img src="/images/404-bg.png" alt="" className="hidden w-full lg:block" />
          <p className="bg-gradient-to-b from-lime to-transparent bg-clip-text font-heading text-[7rem] font-bold leading-none text-transparent lg:hidden">404</p>
          <div className="mt-6 lg:absolute lg:inset-x-0 lg:top-[36.25cqw] lg:mt-0">
            <h1 className="text-heading-s lg:text-[4em] lg:leading-[1.2]">The page you are looking<br />for doesn&rsquo;t exist</h1>
            <p className="mt-4 text-body-m lg:mt-[1.7em] lg:text-[1em]">Try to use a correct url or go back to homepage to start again</p>
            <Link to="/" className="mt-8 inline-flex h-[46px] items-center rounded-full bg-lime px-8 text-label-m font-medium text-ink lg:mt-[1.8em]">Back to Home</Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}