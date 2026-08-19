import React from 'react'

type SkillGroup = {
  title: string
  icon: string
  skills: string[]
}

const skillGroups: SkillGroup[] = [
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

const Skills = () => {
  return (
    <section className='mt-12' aria-labelledby='skills-heading'>
      <h2 id='skills-heading' className='font-bold text-4xl'>Skills</h2>

      <div className='mx-auto mt-6 grid max-w-4xl gap-5 sm:grid-cols-2'>
        {skillGroups.map((group) => (
          <article key={group.title} className='rounded border-2 border-fresh-sky p-5 shadow'>
            <div className='flex h-10 w-10 items-center justify-center rounded-full bg-oceon-deep font-mono text-sm font-bold text-white' aria-hidden='true'>
              {group.icon}
            </div>
            <h3 className='mt-4 text-xl font-bold'>{group.title}</h3>
            <ul className='mt-4 space-y-2 text-left'>
              {group.skills.map((skill) => (
                <li key={skill} className='flex items-center gap-2 text-sm'>
                  <span className='h-1.5 w-1.5 rounded-full bg-pumpkin-spice' aria-hidden='true' />
                  {skill}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Skills