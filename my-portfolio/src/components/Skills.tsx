import { skillGroups } from '../data/skillsData'

const Skills = () => {
  return (
    <section className='mt-12' aria-labelledby='skills-heading'>
      <h2 id='skills-heading' className='font-bold text-4xl text-oceon-deep'>Skills</h2>

      <div className='mx-auto mt-6 grid max-w-5xl gap-6 sm:grid-cols-2'>
        {skillGroups.map((group) => (
          <article key={group.title} className='rounded-3xl bg-white/85 p-6 shadow-md shadow-oceon-deep/10 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-oceon-deep/15'>
            <div className='flex h-10 w-10 items-center justify-center rounded-full bg-oceon-deep font-mono text-sm font-bold text-white' aria-hidden='true'>
              {group.icon}
            </div>
            <h3 className='mt-4 text-xl font-bold text-oceon-deep'>{group.title}</h3>
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