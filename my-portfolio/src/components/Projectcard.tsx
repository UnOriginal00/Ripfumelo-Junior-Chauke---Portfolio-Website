import { Link } from 'react-router-dom'
import type { Project } from '../data/projectsData'

type Props = {

  project:Project

}

const Projectcard = ({project}: Props) => {
  return (
    <Link to={`/projects/${project.slug}`} className='group relative flex w-full flex-col overflow-hidden rounded-2xl border-0 bg-white outline-none shadow-lg shadow-oceon-deep/10 hover:scale-103 hover:cursor-pointer 
                    transition duration-300 hover:shadow-xl hover:shadow-oceon-deep/20'>
      <div className='relative min-h-[18rem] w-full overflow-hidden rounded-2xl'>
        <img className='absolute inset-0 h-full w-full object-cover' src={project.image} alt={`${project.title} project thumbnail`} />
        <div className='absolute inset-x-0 bottom-0 border-t border-white/70 bg-white/85 p-5 text-left transition-all duration-700 ease-out group-hover:inset-y-0 group-hover:flex group-hover:flex-col group-hover:justify-start'>
          <h2 className='font-bold text-oceon-deep'>{project.title}</h2>
          <div className='mt-2 flex max-h-0 gap-2 overflow-hidden opacity-0 transition-all duration-700 ease-out group-hover:max-h-8 group-hover:opacity-100'>
            {project.techStack.slice(0, 2).map((technology) => (
              <span key={technology} className='rounded-full bg-tropical-teal/20 px-2 py-1 text-[11px] font-semibold text-oceon-deep'>{technology}</span>
            ))}
          </div>
          <p className='mt-0 max-h-0 overflow-hidden text-sm opacity-0 transition-all duration-700 ease-out group-hover:mt-3 group-hover:max-h-24 group-hover:opacity-100'>{project.shortDescription}</p>
        </div>
      </div>
    </Link>
  )
}

export default Projectcard;