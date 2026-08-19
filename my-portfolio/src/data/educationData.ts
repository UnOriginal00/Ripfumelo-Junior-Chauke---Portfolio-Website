export type EducationEvent = {
  period: string
  title: string
  institution: string
  details: string
  highlights: string[]
}

export const educationEvents: EducationEvent[] = [
  {
    period: '2024',
    title: 'Matric',
    institution: 'High school',
    details: 'Completed matric with a strong performance in Mathematics and a foundation for studying Computer Science.',
    highlights: ['Performed well in Mathematics', 'Invited to participate in a Mathematics Olympiad'],
  },
  {
    period: '2025 - Present',
    title: 'BSc Computer Science',
    institution: 'Eduvos',
    details: 'Studying programming, software development, data structures, and computer systems while building practical experience beyond the classroom.',
    highlights: ['Achieved academic excellence', 'Received private sponsorship for my studies', 'Participated in a hackathon and received positive feedback', 'Invited to teach younger students because of my programming skills'],
  },
  {
    period: 'Ongoing',
    title: 'Independent learning',
    institution: 'Personal projects',
    details: 'Continuously learning, experimenting with new technologies, and building projects to strengthen my skills.',
    highlights: ['Regularly exploring new programming ideas', 'Learning through hands-on projects'],
  },
]
