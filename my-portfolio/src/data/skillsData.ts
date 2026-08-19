export type SkillGroup = {
  title: string
  icon: 'code' | 'tool' | 'concept' | 'practice'
  description: string
  skills: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'Programming Languages',
    icon: 'code',
    description: 'Languages I use to turn ideas into working software.',
    skills: ['C#', 'JavaScript', 'TypeScript', 'Python'],
  },
  {
    title: 'Tools & Frameworks',
    icon: 'tool',
    description: 'Tools and frameworks I use to build and ship projects.',
    skills: ['MySQL', 'React', '.NET', 'Git', 'Visual Studio', 'Visual Studio Code'],
  },
  {
    title: 'Core Concepts',
    icon: 'concept',
    description: 'The foundations I use when solving technical problems.',
    skills: ['Data structures', 'Algorithms', 'Object-oriented programming', 'APIs'],
  },
  {
    title: 'Development Practices',
    icon: 'practice',
    description: 'Ways I keep my work clear, useful, and maintainable.',
    skills: ['Problem solving', 'Responsive design', 'Debugging', 'Team collaboration'],
  },
]
