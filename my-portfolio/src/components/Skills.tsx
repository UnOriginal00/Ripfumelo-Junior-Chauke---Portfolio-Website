import { skillGroups } from '../data/skillsData'
import { Braces, CheckCircle2, Lightbulb, Wrench } from 'lucide-react'

const groupIcons = {
  code: Braces,
  tool: Wrench,
  concept: Lightbulb,
  practice: CheckCircle2,
}

const Skills = () => {
  return (
    <section className='mt-12' aria-labelledby='skills-heading'>
      <h2 id='skills-heading' className='font-bold text-4xl text-oceon-deep'>Skills</h2>

      <div className='mx-auto mt-6 grid max-w-5xl gap-6 sm:grid-cols-2'>
        {skillGroups.map((group, index) => {
          const Icon = groupIcons[group.icon]
          return (
          <article key={group.title} className={`section-reveal rounded-3xl bg-white/85 p-6 shadow-md shadow-oceon-deep/10 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-oceon-deep/15 [animation-delay:${index * 100}ms]`}>
            <div className='flex h-11 w-11 items-center justify-center rounded-2xl bg-oceon-deep text-white shadow-md shadow-oceon-deep/20' aria-hidden='true'>
              <Icon size={21} strokeWidth={2.2} />
            </div>
            <h3 className='mt-4 text-xl font-bold text-oceon-deep'>{group.title}</h3>
            <p className='mt-2 text-sm leading-6 text-oceon-deep/65'>{group.description}</p>
            <ul className='mt-5 flex flex-wrap gap-2 text-left'>
              {group.skills.map((skill) => (
                <li key={skill} className='rounded-full bg-fresh-sky/15 px-3 py-1.5 text-sm font-medium text-oceon-deep'>
                  {skill}
                </li>
              ))}
            </ul>
          </article>
          )
        })}
      </div>
    </section>
  )
}

export default Skills