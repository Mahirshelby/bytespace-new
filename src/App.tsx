import Navbar from './components/layout/Navbar'
import Hero from './components/sections/Hero'
import LogoStrip from './components/sections/LogoStrip'
import Discover from './components/sections/Discover'
import CourseGrid from './components/sections/CourseGrid'
import ExploreCategories from './components/sections/ExploreCategories'
import GrowthPath from './components/sections/GrowthPath'

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
      </main>
    </>
  )
}