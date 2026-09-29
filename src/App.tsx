import Navbar from './components/layout/Navbar'
import Hero from './components/sections/Hero'
import LogoStrip from './components/sections/LogoStrip'
import Discover from './components/sections/Discover'
import CourseGrid from './components/sections/CourseGrid'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <LogoStrip />
        <Discover />
        <CourseGrid />
      </main>
    </>
  )
}