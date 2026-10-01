import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Landing from './pages/Landing'
import Courses from './pages/Courses'
import CourseDetail from './pages/CourseDetail'
import Creator from './pages/Creator'
import Login from './pages/Login'
import Register from './pages/Register'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/course" element={<CourseDetail />} />
        <Route path="/creator" element={<Creator />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}