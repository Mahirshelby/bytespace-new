export type Course = {
  id: number
  title: string
  author: string
  image: string
  lessons: number
  duration: string
  comments: number
  rating: number
  level: string
  price: number
}

const base = { author: 'purepearl studio', lessons: 17, duration: '2 hours 16 mins', comments: 59, rating: 4.5, level: 'Beginner', price: 25 }

export const courses: Course[] = [
  { ...base, id: 1, title: 'Learn Figma from Basic', image: '/images/course-1.png' },
  { ...base, id: 2, title: 'Build Digital Asset', image: '/images/course-2.png' },
  { ...base, id: 3, title: 'the Power of Big Data', image: '/images/course-3.png' },
  { ...base, id: 4, title: 'Balancing Productivity and Life', image: '/images/course-4.png' },
  { ...base, id: 5, title: 'Mastering Money Management', image: '/images/course-5.png' },
  { ...base, id: 6, title: 'From Idea to Startup Success', image: '/images/course-6.png' },
]