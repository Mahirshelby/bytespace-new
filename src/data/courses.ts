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
  { ...base, id: 4, title: 'Learn Figma from Basic', image: '/images/course-1.png' },
  { ...base, id: 5, title: 'Build Digital Asset', image: '/images/course-2.png' },
  { ...base, id: 6, title: 'the Power of Big Data', image: '/images/course-3.png' },
]