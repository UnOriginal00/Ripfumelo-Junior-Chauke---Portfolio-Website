export type EducationEvent = {
  period: string
  title: string
  institution: string
  details: string
}

export const educationEvents: EducationEvent[] = [
  {
    period: '2024',
    title: 'Matric',
    institution: 'High school',
    details: 'Completed secondary school and built a strong foundation for further study.',
  },
  {
    period: '2025 - Present',
    title: 'BSc Computer Science',
    institution: 'University studies',
    details: 'Studying programming, software development, data structures, and computer systems.',
  },
  {
    period: 'Ongoing',
    title: 'Independent learning',
    institution: 'Personal projects',
    details: 'Applying new skills by building projects and exploring modern web technologies.',
  },
]
