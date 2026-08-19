export type SkillGroup = {
  title: string
  icon: string
  skills: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'Programming Languages',
    icon: '</>',
    skills: ['JavaScript', 'TypeScript', 'Python', 'C#'],
  },
  {
    title: 'Tools & Frameworks',
    icon: '{}',
    skills: ['React', 'Git', 'Node.js', 'Visual Studio Code'],
  },
  {
    title: 'Core Concepts',
    icon: '++',
    skills: ['Data structures', 'Algorithms', 'Object-oriented programming', 'APIs'],
  },
  {
    title: 'Development Practices',
    icon: '✓',
    skills: ['Problem solving', 'Responsive design', 'Debugging', 'Team collaboration'],
  },
]
