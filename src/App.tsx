import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import LogoStrip from './components/sections/LogoStrip'
import Discover from './components/sections/Discover'
import CourseGrid from './components/sections/CourseGrid'
import ExploreCategories from './components/sections/ExploreCategories'
import GrowthPath from './components/sections/GrowthPath'
import CreatorFeatures from './components/sections/CreatorFeatures'
import CreatorCTA from './components/sections/CreatorCTA'
import Testimonials from './components/sections/Testimonials'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <LogoStrip />
        <Discover />
        <CourseGrid />
        <ExploreCategories />
        <GrowthPath />
        <CreatorFeatures />
        <CreatorCTA />
        <Testimonials />
      </main>
      <Footer />
    </>
  )
}